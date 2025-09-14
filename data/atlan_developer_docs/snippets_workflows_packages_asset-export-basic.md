# Source URL
https://developer.atlan.com/snippets/workflows/packages/asset-export-basic/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/asset-export-basic/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Asset export (basic) package identifies all assets that could have been enriched in some way through Atlan's UI and extracts them.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Asset export (basic) package identifies all assets that could have been enriched in some way through Atlan's UI and extracts them.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/asset-export-basic.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Asset export basic - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/asset-export-basic/
meta-twitter:card: summary_large_image
meta-twitter:description: Asset export (basic) package identifies all assets that could have been enriched in some way through Atlan's UI and extracts them.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/asset-export-basic.png
meta-twitter:title: Asset export basic - Developer
meta-viewport: width=device-width,initial-scale=1
title: Asset export basic - Developer
-->

[Skip to content](#asset-export-basic-package) Developer Asset export basic Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

Asset export (basic) package[¶](#asset-export-basic-package "Permanent link")
=============================================================================

The [asset export (basic) package](https://solutions.atlan.com/asset-export-basic/) identifies all assets that could have been enriched in some way through Atlan's UI and extracts them. The resulting CSV file can be modified or enriched, and then loaded back using the [asset import package](https://solutions.atlan.com/asset-import/).

All assets[¶](#all-assets "Permanent link")
-------------------------------------------

[2\.6\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.6.0 "Minimum version")

In this example, we’re building and running the `asset-export` workflow to export all assets.

However, you can also use one of the following methods to customize the scope of your asset export workflow:

* `enriched_only()`: sets up the package to export only assets enriched by users.
* `glossaries_only()`: sets up the package to export only glossaries.
* `products_only()`: sets up the package to export only data products.
* `all_assets()`: sets up the package to export all assets, whether enriched by users or not, will be exported.

Java

Python

Kotlin

Raw REST API

Coming soon

| Import assets from the object store | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import AssetExportBasic  client = AtlanClient()  workflow = (     AssetExportBasic() # (1)     .all_assets( # (2)         prefix="default",         include_description=True,         include_glossaries=True,         include_data_products=True,         include_archived=True,     )     .object_store(prefix="/test/prefix") # (3)     .s3( # (4)         access_key="test-access-key",         secret_key="test-secret-key",         bucket="my-bucket",         region="us-west-1",     ) ).to_workflow() # (5)  response = client.workflow.run(workflow)  # (6)  ``` |

1. The `AssetExportBasic` package exports assets from Atlan.
2. In this example, we’re building a workflow to export `all_assets()`.
However, you can also use one of the following methods to
customize the scope of your asset export workflow:

    * `enriched_only()`: sets up the package to export only assets enriched by users.
        * `glossaries_only()`: sets up the package to export only glossaries.
        * `products_only()`: sets up the package to export only data products.
        * `all_assets()`: sets up the package to export all assets, whether
         enriched by users or not, will be exported.
        For `all_assets()`, you need to provide following:

    * `prefix`: starting value for a `qualifiedName` that
         will determine which assets to export, default: `default` (all data assets).
        * `include_description`: whether to extract only user\-entered description
         (`False`), or to also include system\-level description (`True`).
        * `include_glossaries`: whether glossaries (and their terms
         and categories) should be exported (`True`) or not (`False`).
        * `include_data_products`: whether data products
         (and their domains) should be exported (`True`) or not (`False`).
        * `include_archived`: whether to include archived
         assets in the export (`True`) or only active assets (`False`).
3. To set up the package to export to an object storage location, you need to provide

    * `prefix`: directory (path) within the object store
         where the exported file will be uploaded.
4. In this example, we're exporting assets to an object storage location using `s3()`.
However, you can use different object storage methods such as `gcs()` or `adls()`.
You can also configure different export delivery methods using one of the following methods:

    * `email()`: sets up the package to deliver the export via email.
        * `direct()`: sets up the package to deliver the export via direct download.
        For `s3()`, you need to provide following:

    * `access_key`: AWS access key.
        * `secret_key`: AWS secret key.
        * `bucket`: S3 bucket to upload the export file to.
        * `region`: name of the AWS region.
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

[2\.6\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.6.0 "Minimum version")

To re\-run an existing asset export basic workflow:

Java

Python

Kotlin

Raw REST API

Coming soon

| Re\-run existing asset export basic workflow | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import WorkflowPackage  client = AtlanClient()  existing = client.workflow.find_by_type(  # (1)   prefix=WorkflowPackage.ASSET_EXPORT_BASIC, max_results=5 )  # Determine which asset export basic workflow (n) # from the list of results you want to re-run. response = client.workflow.rerun(existing[n]) # (2)  ``` |

1. You can find workflows by their type using the workflow client `find_by_type()` method and providing the **prefix** for one of the packages.
In this example, we do so for the `AssetExportBasic`. (You can also specify
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
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "csa-asset-export-basic" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `csa-asset-export-basic` prefix will ensure you only find existing asset export basic workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object.
        (Remember since this is a search, there could be multiple results, so you may want to use the other
        details in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "csa-asset-export-basic-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2024\-11\-202025\-01\-28

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/asset-export-basic/) to provide us with more information. 

Back to top

[Previous Asset import](../asset-import/) [Next API token connection admin](../api-token-connection-admin/) 

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

