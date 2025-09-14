# Source URL
https://developer.atlan.com/snippets/workflows/packages/api-token-connection-admin/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/api-token-connection-admin/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: API token connection admin package allows you to assign an API token to a connection as a connection admin.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: API token connection admin package allows you to assign an API token to a connection as a connection admin.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/api-token-connection-admin.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: API token connection admin package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/api-token-connection-admin/
meta-twitter:card: summary_large_image
meta-twitter:description: API token connection admin package allows you to assign an API token to a connection as a connection admin.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/api-token-connection-admin.png
meta-twitter:title: API token connection admin package - Developer
meta-viewport: width=device-width,initial-scale=1
title: API token connection admin package - Developer
-->

[Skip to content](#api-token-connection-admin-package) Developer API token connection admin package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

API token connection admin package[¶](#api-token-connection-admin-package "Permanent link")
===========================================================================================

The [API token connection admin package](https://solutions.atlan.com/api-token-connection-admin) allows you to assign an API token to a connection as a connection admin. This is a necessary step when:

* A connection is created through a workflow, run by a user
* You want to use an API token to programmatically administrate
the connection or its assets (in particular, to manage policies in a persona)

Configuration[¶](#configuration "Permanent link")
-------------------------------------------------

[4\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/4.1.0 "Minimum version")

To set up the API token connection admin with the specified configuration.

Java

Python

Kotlin

Raw REST API

Coming soon

| API token connection admin with the specified configuration | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import APITokenConnectionAdmin  client = AtlanClient()  workflow = (     APITokenConnectionAdmin() # (1)     .config( # (2)         connection_qualified_name="default/snowflake/1234567890",         api_token_guid="92588c67-5ddf-4a45-8b5c-dd92f4b84e99",     )     .to_workflow() # (3) )  response = client.workflow.run(workflow)  # (4)  ``` |

1. The API token connection admin package allows you 
to assign an API token to a connection as a connection admin.
2. Set up the API token connection admin with the specified configuration.

    * connection\_qualified\_name: connection qualified name
        to which you want to add the API token as a connection admin
        * api\_token\_guid: GUID of the API token
3. Convert the package into a `Workflow` object.
4. Run the workflow by invoking the `run()` method
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

[4\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/4.1.0 "Minimum version")

To re\-run an existing api token connection admin workflow:

Java

Python

Kotlin

Raw REST API

Coming soon

| Re\-run existing api token connection admin workflow | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import WorkflowPackage  client = AtlanClient()  existing = client.workflow.find_by_type(  # (1)   prefix=WorkflowPackage.API_TOKEN_CONNECTION_ADMIN, max_results=5 )  # Determine which api token connection admin workflow (n) # from the list of results you want to re-run. response = client.workflow.rerun(existing[n]) # (2)  ``` |

1. You can find workflows by their type using the workflow client `find_by_type()` method and providing the **prefix** for one of the packages.
In this example, we do so for the `APITokenConnectionAdmin`. (You can also specify
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
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "csa-api-token-connection-admin" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `csa-api-token-connection-admin` prefix will ensure you only find existing api token connection admin workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object.
        (Remember since this is a search, there could be multiple results, so you may want to use the other
        details in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "csa-api-token-connection-admin-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2025\-01\-282025\-01\-28

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/api-token-connection-admin/) to provide us with more information. 

Back to top

[Previous Asset export (basic)](../asset-export-basic/) [Next BigQuery assets](../bigquery-assets/) 

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

