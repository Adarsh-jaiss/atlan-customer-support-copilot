# Source URL
https://developer.atlan.com/snippets/tags/monitor-propagation/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/tags/monitor-propagation/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to monitor tag propagation of assets in Atlan using background tasks queue.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to monitor tag propagation of assets in Atlan using background tasks queue.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/tags/monitor-propagation.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Monitor tag propagation - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/tags/monitor-propagation/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to monitor tag propagation of assets in Atlan using background tasks queue.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/tags/monitor-propagation.png
meta-twitter:title: Monitor tag propagation - Developer
meta-viewport: width=device-width,initial-scale=1
title: Monitor tag propagation - Developer
-->

[Skip to content](#monitor-tag-propagation) Developer Monitor tag propagation Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/task/search (POST)](../../../endpoints/#tag:apimetatasksearch-post)

Monitor tag propagation[¶](#monitor-tag-propagation "Permanent link")
=====================================================================

Atlan's background tasks queue provides essential insights for monitoring tag propagation of assets, detailing completed, pending, in\-progress, and deleted tasks. In Atlan's SDK you can use the `FluentTasks` object to search the tasks queue.

Run the search[¶](#run-the-search "Permanent link")
---------------------------------------------------

[2\.0\.2](https://github.com/atlanhq/atlan-python/releases/tag/2.0.2 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

For example, to initiate a search for pending tag propagation tasks related to a specific asset after a tag has been added:

Java

Python

Kotlin

Raw REST API

| Search for background tag propagation tasks | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` client.tasks.select() // (1)     // (2)     .where(AtlanTask.ENTITY_GUID.eq("f65e3da2-6ec2-4ff5-8f0b-b6eba640df24"))     .where(AtlanTask.TYPE.eq(AtlanTaskType.CLASSIFICATION_PROPAGATION_ADD))     .where(AtlanTask.STATUS.match(AtlanTaskStatus.PENDING.getValue()))     .stream() // (3)     .forEach(task -> { // (4)         log.info("Task: {}", task);     });  ``` |

1. To search across all tasks, you can use the `tasks.select()` convenience method on a client.
2. The `.where()` method allows you to limit to only tasks that have a particular value in a particular field:

    * `GUID` of the asset for which you want to retrieve tag propagation tasks.
        * Specify the task type; in this example, we're retrieving tasks for monitoring propagation after a tag has been added to the asset.
        * Specify the task status; here, we're checking for any pending tag propagation tasks for the given asset.
 **Note:** There's no need to try to remember or even know the precise string values for the above constants. Enums for these values are available in the SDK, making it easier for you.
3. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
4. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Search for background tag propagation tasks | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.task import AtlanTask from pyatlan.model.fluent_tasks import FluentTasks from pyatlan.model.enums import AtlanTaskStatus, AtlanTaskType  client = AtlanClient()  task_request = (     FluentTasks() # (1)     .where( # (2)         AtlanTask.ENTITY_GUID.eq("f65e3da2-6ec2-4ff5-8f0b-b6eba640df24")     )     .where(         AtlanTask.TYPE.eq(AtlanTaskType.CLASSIFICATION_PROPAGATION_ADD.value)     )     .where(         AtlanTask.STATUS.match(AtlanTaskStatus.PENDING.value)     )     .to_request() # (3) )  response = client.tasks.search(request=task_request) # (4)  for task in response:  # (5)     ...  ``` |

1. You can use `FluentTasks()` to simplify the most common searches against the Atlan task queue.
2. The `.where()` method allows you to limit to only tasks that have a particular value in a particular field:

    * `GUID` of the asset for which you want to retrieve tag propagation tasks.
        * Specify the task type; in this example, we're retrieving tasks for monitoring propagation after a tag has been added to the asset.
        * Specify the task status; here, we're checking for any pending tag propagation tasks for the given asset.
 **Note:** There's no need to try to remember or even know the precise string values for the above constants. Enums for these values are available in the SDK, making it easier for you.
3. Build the task request object using the provided search criteria.
4. Initiate the task request search by providing the created request object.
5. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Search for background tag propagation tasks | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` client.assets.select() // (1)      // (2)     .where(AtlanTask.ENTITY_GUID.eq("f65e3da2-6ec2-4ff5-8f0b-b6eba640df24"))     .where(AtlanTask.TYPE.eq(AtlanTaskType.CLASSIFICATION_PROPAGATION_ADD))     .where(AtlanTask.STATUS.match(AtlanTaskStatus.PENDING.value))     .stream() // (3)     .forEach { // (4)         log.info { "Task: $it" }     }  ``` |

1. To search across all tasks, you can use the `tasks.select()` convenience method on a client.
2. The `.where()` method allows you to limit to only tasks that have a particular value in a particular field:

    * `GUID` of the asset for which you want to retrieve tag propagation tasks.
        * Specify the task type; in this example, we're retrieving tasks for monitoring propagation after a tag has been added to the asset.
        * Specify the task status; here, we're checking for any pending tag propagation tasks for the given asset.
 **Note:** There's no need to try to remember or even know the precise string values for the above constants. Enums for these values are available in the SDK, making it easier for you.
3. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
4. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| POST /api/meta/task/search | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 ``` | ``` {  "dsl": {    "from": 0,    "size": 20,    "query": {      "bool": {        "filter": [          {            "term": {              "__task_entityGuid": {                "value": "f65e3da2-6ec2-4ff5-8f0b-b6eba640df24", // (1)                "case_insensitive": false              }            }          },          {            "term": {              "__task_type": {                "value": "CLASSIFICATION_PROPAGATION_ADD" // (2)              }            }          },          {            "match": {              "__task_status": {                "query": "PENDING" // (3)              }            }          }        ]      }    },    "sort": [      {        "__task_startTime": {          "order": "asc" // (4)        }      }    ],    "track_total_hits": true  } }  ``` |

1. `GUID` of the asset for which you want to retrieve tag propagation tasks.
2. Specify the task type; in this example, we're retrieving tasks for monitoring propagation after a tag has been added to the asset.
3. Specify the task status; here, we're checking for any pending tag propagation tasks for the given asset.
4. This is the default sort order for tag propagation tasks search.

---

2024\-03\-042025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/tags/monitor-propagation/) to provide us with more information. 

Back to top

[Previous Manage Atlan tags](../manage/) [Next Access control and personalization](../../access/) 

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

