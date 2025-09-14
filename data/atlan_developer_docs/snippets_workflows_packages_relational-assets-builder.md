# Source URL
https://developer.atlan.com/snippets/workflows/packages/relational-assets-builder/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/relational-assets-builder/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Relational assets builder package allows you to create (and update) net-new relational assets connections, databases, schemas, tables, views, materialized views and columns.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Relational assets builder package allows you to create (and update) net-new relational assets connections, databases, schemas, tables, views, materialized views and columns.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/relational-assets-builder.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Relational assets builder package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/relational-assets-builder/
meta-twitter:card: summary_large_image
meta-twitter:description: Relational assets builder package allows you to create (and update) net-new relational assets connections, databases, schemas, tables, views, materialized views and columns.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/relational-assets-builder.png
meta-twitter:title: Relational assets builder package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Relational assets builder package - Developer
-->

[Skip to content](#relational-assets-builder-package) Developer Relational assets builder package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

Relational assets builder package[¶](#relational-assets-builder-package "Permanent link")
=========================================================================================

The [relational assets builder package](https://solutions.atlan.com/relational-assets-builder) allows you to create (and update) net\-new relational assets: connections, databases, schemas, tables, views, materialized views and columns.

Import relational assets from object store[¶](#import-relational-assets-from-object-store "Permanent link")
-----------------------------------------------------------------------------------------------------------

[2\.6\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.6.0 "Minimum version")

To import relational assets directly from the object store:

Java

Python

Kotlin

Raw REST API

Coming soon

| Import relational assets from the object store | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import RelationalAssetsBuilder from pyatlan.model.assets import Asset from pyatlan.model.enums import AssetInputHandling, AssetDeltaHandling, AssetRemovalType  client = AtlanClient()  workflow = (     RelationalAssetsBuilder() # (1)     .object_store( # (2)         prefix="/test/prefix",         object_key="assets-test.csv",     )     .s3( # (3)         access_key="test-access-key",         secret_key="test-secret-key",         bucket="my-bucket",         region="us-west-1",     )     .assets_semantics( # (4)         input_handling=AssetInputHandling.UPSERT,         delta_handling=AssetDeltaHandling.INCREMENTAL,         removal_type=AssetRemovalType.ARCHIVE,     )     .options( # (5)         remove_attributes=[Asset.CERTIFICATE_STATUS, Asset.ANNOUNCEMENT_TYPE],         fail_on_errors=True,         field_separator=",",         batch_size=20,     ) ).to_workflow() # (6)  response = client.workflow.run(workflow)  # (7)  ``` |

1. The `RelationalAssetsBuilder` allows you to create (and update) net\-new relational assets.
2. To set up the package for importing metadata directly from the object store, provide the following information:

    * `prefix`: directory (path) within the bucket/container
         from which to retrieve the object(s).
        * `object_key`: object key (filename), including its extension,
         within the bucket/container and prefix.
3. You can use different object store methods (e.g: `s3()`, `gcs()`, `adls()`). In this example,
we're building a workflow using `s3()` and for that, you’ll need to provide the following information:

    * AWS access key.
        * AWS secret key.
        * name of the bucket/storage that contains the metadata CSV files.
        * name of the AWS region.
4. To set up the package to import metadata with semantics, you need to provide:

    * `input_handling`: whether to allow the creation of new full (`AssetInputHandling.UPSERT`)
         or partial (`AssetInputHandling.PARTIAL`) assets from the input CSV, or ensure assets
         are only updated (`AssetInputHandling.UPDATED`) if they already exist in Atlan.
        * `delta_handling`: whether to treat the input file as an initial load, full replacement
         \[`AssetDeltaHandling.FULL_REPLACEMENT`] (deleting any existing assets not in the file) or only incremental \[`AssetDeltaHandling.INCREMENTAL`] (no deletion of existing assets).
        * `removal_type`: if `delta_handling` is set to `FULL_REPLACEMENT`, this parameter specifies whether to
         delete any assets not found in the latest file by archive (recoverable) \[`AssetRemovalType.ARCHIVE`] or purge (non\-recoverable) \[`AssetRemovalType.PURGE`].
         If `delta_handling` is set to `INCREMENTAL`, this parameter is ignored and assets are archived.
5. (Optional) To set up the package for importing relational assets with
advanced configuration, provide the following information:

    * `remove_attributes`: list of attributes to clear (remove)
         from assets if their value is blank in the provided file.
        * `fail_on_errors`: specifies whether an invalid value
         in a field should cause the import to fail (`True`) or
         log a warning, skip that value, and proceed (`False`).
        * `field_separator`: character used to separate
         fields in the input file (e.g: `','` or `';'`).
        * `batch_size`: maximum number of rows
         to process at a time (per API request).
6. Convert the package into a `Workflow` object.
7. Run the workflow by invoking the `run()` method
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

[2\.6\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.6.0 "Minimum version")

To re\-run an existing relational assets builder workflow:

Java

Python

Kotlin

Raw REST API

Coming soon

| Re\-run existing relational assets builder workflow | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import WorkflowPackage  client = AtlanClient()  existing = client.workflow.find_by_type(  # (1)   prefix=WorkflowPackage.RELATIONAL_ASSETS_BUILDER, max_results=5 )  # Determine which relational assets builder workflow (n) # from the list of results you want to re-run. response = client.workflow.rerun(existing[n]) # (2)  ``` |

1. You can find workflows by their type using the workflow client `find_by_type()` method and providing the **prefix** for one of the packages.
In this example, we do so for the `RelationalAssetsBuilder`. (You can also specify
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
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "csa-relational-assets-builder" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `csa-relational-assets-builder` prefix will ensure you only find existing relational assets builder workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object.
        (Remember since this is a search, there could be multiple results, so you may want to use the other
        details in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "csa-relational-assets-builder-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2024\-11\-202024\-11\-20

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/relational-assets-builder/) to provide us with more information. 

Back to top

[Previous Redshift assets](../redshift-assets/) [Next Snowflake assets](../snowflake-assets/) 

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

