# Source URL
https://developer.atlan.com/snippets/workflows/packages/lineage-builder/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/lineage-builder/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Lineage builder package allows you to create lineage between any source and any target asset.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Lineage builder package allows you to create lineage between any source and any target asset.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/lineage-builder.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Lineage builder package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/lineage-builder/
meta-twitter:card: summary_large_image
meta-twitter:description: Lineage builder package allows you to create lineage between any source and any target asset.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/lineage-builder.png
meta-twitter:title: Lineage builder package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Lineage builder package - Developer
-->

[Skip to content](#lineage-builder-package) Developer Lineage builder package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

Lineage builder package[¶](#lineage-builder-package "Permanent link")
=====================================================================

The [lineage builder package](https://solutions.atlan.com/lineage-builder) allows you to create lineage between any source and any target asset.

Retrieve the lineage file from object store[¶](#retrieve-the-lineage-file-from-object-store "Permanent link")
-------------------------------------------------------------------------------------------------------------

To retrieve the lineage file from cloud object storage:

Java

Python

Kotlin

Raw REST API

Coming soon

| Retrieve the lineage file from object store | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import LineageBuilder from pyatlan.model.enums import AssetInputHandling  client = AtlanClient()  workflow = (     LineageBuilder() # (1)     .object_store( # (2)         prefix="text-prefix",         object_key="test-object-key"     )     .s3( # (3)         access_key="test-access-key",         secret_key="test-secret-key",         region="test-region",         bucket="test-bucket",     )     .options( # (4)         input_handling=AssetInputHandling.UPSERT,         fail_on_errors=True,         case_sensitive_match=False,         field_separator=",",         batch_size=20,     ) ).to_workflow() # (5)  response = client.workflow.run(workflow)  # (6)  ``` |

1. Lineage builder package allows you to create lineage between any source and any target asset.
2. Set up the package to retrieve the lineage file from cloud object storage.
3. You can use different object store methods (e.g: `s3()`, `gcs()`, `adls()`). In this example,
we're building a workflow using `s3()` and for that, you’ll need to provide the following information:

    * AWS access key.
        * AWS secret key.
        * name of the bucket/storage that contains the metadata CSV files.
        * name of the AWS region.
4. You can provide other following `options()`:

    * `input_handling`: specifies whether to allow the creation
         of new assets from the input CSV (full (`UPSERT`)
         or partial (`PARTIAL`) assets) or only update existing
         (`UPDATE`) assets in Atlan.
        * `fail_on_errors`: specifies whether an invalid value
         in a field should cause the import to fail (`True`) or
         log a warning, skip that value, and proceed (`False`).
        * `case_sensitive_match`: indicates whether to use
         case\-sensitive matching when running in update\-only mode (`True`)
         or to try case\-insensitive matching (`False`).
        * `field_separator`: character used to separate
         fields in the input file (e.g: `','` or `';'`).
        * `batch_size`: maximum number of rows
         to process at a time (per API request).
5. Convert the package into a `Workflow` object.
6. Run the workflow by invoking the `run()` method
on the workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously.
        See the [packages and workflows introduction](../) for details on how to check the status and wait
        until the workflow has been completed.

Coming soon

Create the workflow via UI only

We recommend creating the workflow only via the UI.
To rerun an existing workflow, see the steps below.

Re\-run existing workflow[¶](#re-run-existing-workflow "Permanent link")
------------------------------------------------------------------------

To re\-run an existing lineage builder workflow:

Java

Python

Kotlin

Raw REST API

Coming soon

| Re\-run existing lineage builder workflow | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import WorkflowPackage  client = AtlanClient()  existing = client.workflow.find_by_type(  # (1)   prefix=WorkflowPackage.LINEAGE_BUILDER, max_results=5 )  # Determine which lineage builder workflow (n) # from the list of results you want to re-run. response = client.workflow.rerun(existing[n]) # (2)  ``` |

1. You can find workflows by their type using the workflow client `find_by_type()` method and providing the **prefix** for one of the packages.
In this example, we do so for the `LineageBuilder`. (You can also specify
the **maximum number of resulting workflows** you want to retrieve as results.)
2. Once you've found the workflow you want to re\-run,
you can simply call the workflow client `rerun()` method.

    * Optionally, you can use `rerun(idempotent=True)` to avoid re\-running a workflow that is already in running or in a pending state.
         This will return details of the already running workflow if found, and by default, it is set to `False`.
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Coming soon

Requires multiple steps through the raw REST API

1. Find the existing workflow.
2. Send through the resulting re\-run request.

| POST /api/service/workflows/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "csa-lineage-builder" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `csa-lineage-builder` prefix will ensure you only find existing asset import workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object.
        (Remember since this is a search, there could be multiple results, so you may want to use the other
        details in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "csa-lineage-builder-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2024\-11\-202025\-01\-28

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/lineage-builder/) to provide us with more information. 

Back to top

[Previous Looker assets](../looker-assets/) [Next Lineage generator (no transformation)](../lineage-generator-nt/) 

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

