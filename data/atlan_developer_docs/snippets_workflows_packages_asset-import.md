# Source URL
https://developer.atlan.com/snippets/workflows/packages/asset-import/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/asset-import/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Asset import package loads metadata from a CSV file that matches the format of one extracted using either of the asset export packages (basic or advanced).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Asset import package loads metadata from a CSV file that matches the format of one extracted using either of the asset export packages (basic or advanced).
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/asset-import.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Asset import package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/asset-import/
meta-twitter:card: summary_large_image
meta-twitter:description: Asset import package loads metadata from a CSV file that matches the format of one extracted using either of the asset export packages (basic or advanced).
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/asset-import.png
meta-twitter:title: Asset import package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Asset import package - Developer
-->

[Skip to content](#asset-import-package) Developer Asset import package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

Asset import package[¶](#asset-import-package "Permanent link")
===============================================================

The [asset import package](https://solutions.atlan.com/asset-import) loads metadata
from a CSV file that matches the format of one extracted using either of the asset
export packages ([basic](https://solutions.atlan.com/asset-export-basic) or [advanced](https://solutions.atlan.com/assets_export)).

Import assets from object store[¶](#import-assets-from-object-store "Permanent link")
-------------------------------------------------------------------------------------

[2\.6\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.6.0 "Minimum version")

To import assets directly from the object store:

Java

Python

Kotlin

Raw REST API

Coming soon

| Import assets from the object store | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import AssetImport from pyatlan.model.assets import Asset from pyatlan.model.enums import AssetInputHandling  client = AtlanClient()  workflow = (     AssetImport() # (1)     .object_store() # (2)     .s3( # (3)         access_key="test-access-key",         secret_key="test-secret-key",         bucket="my-bucket",         region="us-west-1",     )     .assets( # (4)         prefix="/test/prefix",         object_key="assets-test.csv",         input_handling=AssetInputHandling.UPSERT,     )     .assets_advanced( # (5)         remove_attributes=[Asset.CERTIFICATE_STATUS, Asset.ANNOUNCEMENT_TYPE],         fail_on_errors=True,         case_sensitive_match=False,         field_separator=",",         batch_size=20,     )     .glossaries( # (6)         prefix="/test/prefix",         object_key="glossaries-test.csv",         input_handling=AssetInputHandling.UPDATE,     )     .glossaries_advanced( # (7)         remove_attributes=[Asset.CERTIFICATE_STATUS, Asset.ANNOUNCEMENT_TYPE],         fail_on_errors=True,         field_separator=",",         batch_size=20,     )     .data_products( # (8)         prefix="/test/prefix",         object_key="data-products-test.csv",         input_handling=AssetInputHandling.UPDATE,     )     .data_product_advanced( # (9)         remove_attributes=[Asset.CERTIFICATE_STATUS, Asset.ANNOUNCEMENT_TYPE],         fail_on_errors=True,         field_separator=",",         batch_size=20,     ) ).to_workflow() # (10)  response = client.workflow.run(workflow)  # (11)  ``` |

1. The `AssetImport` loads metadata from a CSV file.
2. Set up the package to import metadata directly from the object store.
3. You can use different object store methods (e.g: `s3()`, `gcs()`, `adls()`). In this example,
we're building a workflow using `s3()` and for that, you’ll need to provide the following information:

    * AWS access key.
        * AWS secret key.
        * name of the bucket/storage that contains the metadata CSV files.
        * name of the AWS region.
4. (Optional) To set up the package for importing assets, provide the following information:

    * `prefix`: directory (path) within the object store from
         which to retrieve the file containing asset metadata.
        * `object_key`: object key (filename),
         including its extension, within the object store and prefix
        * `input_handling`: specifies whether to allow the creation
         of new assets from the input CSV with full (`AssetInputHandling.UPSERT`)
         or partial assets (`AssetInputHandling.PARTIAL`)
         or only update (`AssetInputHandling.UPDATE`) existing assets in Atlan.
5. (Optional) To set up the package for importing assets with
advanced configuration, provide the following information:

    * `remove_attributes`: list of attributes to clear (remove)
         from assets if their value is blank in the provided file.
        * `fail_on_errors`: specifies whether an invalid value
         in a field should cause the import to fail (`True`) or
         log a warning, skip that value, and proceed (`False`).
        * `case_sensitive_match`: indicates whether to use
         case\-sensitive matching when running in update\-only mode (`True`)
         or to try case\-insensitive matching (`False`).
        * `is_table_view_agnostic`: specifies whether to treat
         tables, views, and materialized views as interchangeable (`True`)
         or to strictly adhere to specified types in the input (`False`).
        * `field_separator`: character used to separate
         fields in the input file (e.g: `','` or `';'`).
        * `batch_size`: maximum number of rows
         to process at a time (per API request).
6. (Optional) To set up the package for importing glossaries, provide the following information:

    * `prefix`: directory (path) within the object store from
         which to retrieve the file containing glossaries, categories and terms.
        * `object_key`: object key (filename),
         including its extension, within the object store and prefix
        * `input_handling`: specifies whether to allow the creation
         of new glossaries, categories and terms from the input CSV (`AssetInputHandling.UPSERT`)
         or or ensure these are only updated (`AssetInputHandling.UPDATE`) if they already exist in Atlan.
7. (Optional) To set up the package for importing glossaries with
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
8. (Optional) To set up the package for importing data products, provide the following information:

    * `prefix`: directory (path) within the object store from
         which to retrieve the file containing data domains, and data products.
        * `object_key`: object key (filename),
         including its extension, within the object store and prefix
        * `input_handling`: specifies whether to allow the creation
         of new data domains, and data products from the input CSV (`AssetInputHandling.UPSERT`)
         or or ensure these are only updated (`AssetInputHandling.UPDATE`) if they already exist in Atlan.
9. (Optional) To set up the package for importing data domain
 and data products with advanced configuration, provide the following information:

    * `remove_attributes`: list of attributes to clear (remove)
         from assets if their value is blank in the provided file.
        * `fail_on_errors`: specifies whether an invalid value
         in a field should cause the import to fail (`True`) or
         log a warning, skip that value, and proceed (`False`).
        * `field_separator`: character used to separate
         fields in the input file (e.g: `','` or `';'`).
        * `batch_size`: maximum number of rows
         to process at a time (per API request).
10. Convert the package into a `Workflow` object.
11. Run the workflow by invoking the `run()` method
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

To re\-run an existing asset import workflow:

Java

Python

Kotlin

Raw REST API

Coming soon

| Re\-run existing asset import workflow | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import WorkflowPackage  client = AtlanClient()  existing = client.workflow.find_by_type(  # (1)   prefix=WorkflowPackage.ASSET_IMPORT, max_results=5 )  # Determine which asset import workflow (n) # from the list of results you want to re-run. response = client.workflow.rerun(existing[n]) # (2)  ``` |

1. You can find workflows by their type using the workflow client `find_by_type()` method and providing the **prefix** for one of the packages.
In this example, we do so for the `AssetImport`. (You can also specify
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
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "csa-asset-import" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `csa-asset-import` prefix will ensure you only find existing asset import workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object.
        (Remember since this is a search, there could be multiple results, so you may want to use the other
        details in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "csa-asset-import-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2024\-11\-202025\-01\-28

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/asset-import/) to provide us with more information. 

Back to top

[Previous Athena assets](../athena-assets/) [Next Asset export (basic)](../asset-export-basic/) 

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

