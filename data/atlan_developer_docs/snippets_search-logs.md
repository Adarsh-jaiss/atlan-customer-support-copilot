# Source URL
https://developer.atlan.com/snippets/search-logs/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/search-logs/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Search logs provide insights into asset popularity, user interactions, and search trends in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Search logs provide insights into asset popularity, user interactions, and search trends in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/search-logs/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Asset search logs - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/search-logs/
meta-twitter:card: summary_large_image
meta-twitter:description: Search logs provide insights into asset popularity, user interactions, and search trends in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/search-logs/index.png
meta-twitter:title: Asset search logs - Developer
meta-viewport: width=device-width,initial-scale=1
title: Asset search logs - Developer
-->

[Skip to content](#accessing-the-search-logs-of-an-asset) Developer Asset search logs Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

[/api/meta/search/searchlog (POST)](../../endpoints/#tag:apimetasearchsearchlog-post)

Accessing the search logs of an asset[¶](#accessing-the-search-logs-of-an-asset "Permanent link")
=================================================================================================

Search logs provide valuable insights for analysts to monitor the popularity of assets within Atlan, including details such as the most visited assets, user interactions, and emerging search patterns. Accessing the search log of an asset is a flexible operation, which may seem more intricate compared to other operations. To harness the complete flexibility of Atlan's search, the SDK introduces a dedicated `SearchLogRequest` object.

Similar but not identical to searching in general

Atlan's search log, which contains the search logs of an asset, utilizes Elasticsearch. This makes the approach to accessing search logs similar to [searching](../../search/). However, there are differences, as the search log uses a distinct index from the broader search. If you're feeling adventurous, feel free to experiment with the more complex search mechanisms outlined in the [searching](../../search/) section. Nevertheless, this should be sufficient to help you get started with accessing asset search logs.

Most recent viewers of an asset[¶](#most-recent-viewers-of-an-asset "Permanent link")
-------------------------------------------------------------------------------------

[2\.0\.4](https://github.com/atlanhq/atlan-python/releases/tag/2.0.4 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve the most recent viewers of an asset:

Java

Python

Kotlin

Raw REST API

| Retrieve the most recent viewers of an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` List<UserViews> viewers = SearchLog.mostRecentViewers( // (1)     client, "955c455d-cfea-4c9c-844d-e226edf8b6da", 20, List.of("atlansupport") );  for (UserViews viewer: viewers) { // (2)     String user = viewer.getUsername() // (3)     Long viewCount = viewer.getViewCount() // (4)     Long lastAccessed = viewer.getMostRecentView() // (5) }  ``` |

1. You must provide `GUID` of the asset and specify the **maximum number of recent users** to be considered for the search log request.

    * Optionally, you may provide a list of usernames to be excluded from the search log results.
        Because this operation will directly look up the asset's views in Atlan, you must [provide it an `AtlanClient`](../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can then iterate through each recent viewers.
3. Name of the user who viewed the asset.
4. Number of times the user viewed the asset.
5. When the user most recently viewed the asset (epoch\-style), in milliseconds.

| Retrieve the most recent viewers of an asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.search_log import SearchLogRequest  client = AtlanClient()  request = SearchLogRequest.most_recent_viewers(  # (1)     guid="955c455d-cfea-4c9c-844d-e226edf8b6da",     max_users=20,     exclude_users=["atlansupport"], ) response = client.search_log.search(request)  for viewer in response.user_views: # (2)     user = viewer.username # (3)     view_count = viewer.view_count # (4)     last_accessed = viewer.most_recent_view # (5)  ``` |

1. You must provide a `GUID` and specify the **maximum number of recent users** to be considered for the search log request.
    * Optionally, you may provide a list of usernames
     to be excluded from the search log results.
2. You can then iterate through each recent viewers.
3. Name of the user who viewed the asset.
4. Number of times the user viewed the asset.
5. When the user most recently viewed the asset (epoch\-style), in milliseconds.

| Retrieve the most recent viewers of an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` val viewers = SearchLog.mostRecentViewers( // (1)     client, "955c455d-cfea-4c9c-844d-e226edf8b6da", maxUsers=20, listOf("atlansupport") )  for (viewer in viewers) { // (2)      val user = viewer.username  // (3)      val viewCount = viewer.viewCount // (4)      val lastAccessed = viewer.mostRecentView // (5) }  ``` |

1. You must provide a `GUID` and specify the **maximum number of recent users** to be considered for the search log request.

    * Optionally, you may provide a list of usernames to be excluded from the search log results.

Because this operation will directly look up the asset's views in Atlan, you must [provide it an `AtlanClient`](../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

1. You can then iterate through each recent viewers.
2. Name of the user who viewed the asset.
3. Number of times the user viewed the asset.
4. When the user most recently viewed the asset (epoch\-style), in milliseconds.

| POST /api/meta/search/searchlog | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 ``` | ``` {    "dsl": {      "from": 0,      "size": 0,      "aggregations": {        "uniqueUsers": {          "aggregations": {            "latestTimestamp": {              "max": {                "field": "timestamp"              }            }          },          "terms": {            "field": "userName",            "order": [              {                "latestTimestamp": "desc"              }            ],            "size": 20 // (2)          }        },        "totalDistinctUsers": {          "cardinality": {            "field": "userName",            "precision_threshold": 1000          }        }      },      "query": {        "bool": {         "must_not": [           {             "terms": {               "userName": [                 "atlansupport"               ] // (3)             }           }         ],          "filter": [            {              "term": {                "utmTags": {                  "value": "action_asset_viewed"                }              }            },            {              "term": {                "entityGuidsAll": {                  "value": "955c455d-cfea-4c9c-844d-e226edf8b6da", // (1)                  "case_insensitive": false                }              }            },            {              "bool": {                "minimum_should_match": 1,                "should": [                  {                    "term": {                      "utmTags": {                        "value": "ui_profile"                      }                    }                  },                  {                    "term": {                      "utmTags": {                        "value": "ui_sidebar"                      }                    }                  }                ]              }            }          ]        }      },      "sort": [        {          "timestamp": {            "order": "asc"          }        }      ],      "track_total_hits": true    } }  ``` |

1. `GUID` of the asset for which you are seeking the details of recent viewers.
2. **Maximum number of recent users** to be considered for the search log request.
3. Optionally, you may provide a list of usernames to be excluded from the search log results.

Most viewed assets[¶](#most-viewed-assets "Permanent link")
-----------------------------------------------------------

[2\.0\.4](https://github.com/atlanhq/atlan-python/releases/tag/2.0.4 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve the most viewed assets by its total views:

Java

Python

Kotlin

Raw REST API

| Retrieve the most viewed assets by its total views | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` List<AssetViews> topAssetsByViews = SearchLog.mostViewedAssets(   client, 10, false, List.of("atlansupport") // (1) );  for (AssetViews detail: topAssetsByViews) { // (2)     String guid = detail.getGuid() // (3)     Long totalViews = detail.getTotalViews() // (4)     Long distinctUsers = detail.getDistinctUsers() // (5) }  ``` |

1. To retrieve the most viewed assets, specify the maximum number of assets you want to retrieve. Then specify whether you want the most\-viewed based on total number of views, irrespective of distinct users (`false`); or based on the most distinct users, irrespective of total views (`true`).

    * Optionally, you may provide a list of usernames to be excluded from the search log results.

Because this operation will directly look up the asset's views in Atlan, you must [provide it an `AtlanClient`](../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

1. You can then iterate through each asset's views.
2. `GUID` of the asset that was viewed.
3. Number of times the asset has been viewed (in total).
4. Number of distinct users that have viewed the asset.

| Retrieve the most viewed assets by its total view | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.search_log import SearchLogRequest  client = AtlanClient()  request = SearchLogRequest.most_viewed_assets(  # (1)     max_assets=10,     by_different_user=False,     exclude_users=["username"], ) response = client.search_log.search(request)  for detail in response.asset_views: # (2)     guid = detail.guid # (3)     total_views = detail.total_views # (4)     distinct_users = detail.distinct_users # (5)  ``` |

1. To retrieve the most viewed assets, specify the maximum number of assets you want to retrieve.
Then specify whether you want the most\-viewed based on total number of views, irrespective
of distinct users (`False`); or based on the most distinct users, irrespective of total views (`True`).
    * Optionally, you may provide a list of usernames
     to be excluded from the search log results.
2. You can then iterate through each asset's viewers.
3. Name of the user who viewed the asset.
4. Number of times the user viewed the asset.
5. Number of distinct users that have viewed the asset.

| Retrieve the most viewed assets by its total view | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` val topAssetsByViews = SearchLog.mostViewedAssets(     10, byDifferentUsers=false, excludeUsers=listOf("atlansupport") ) // (1)  for (detail in topAssetsByViews) { // (2)      val guid = detail.username  // (3)      val totalViews = detail.viewCount // (4)      val distinctUsers = detail.mostRecentView // (5) }  ``` |

1. To retrieve the most viewed assets, specify the maximum number of assets you want to retrieve. Then specify whether you want the most\-viewed based on total number of views, irrespective of distinct users (`false`); or based on the most distinct users, irrespective of total views (`true`).

    * Optionally, you may provide a list of usernames to be excluded from the search log results.

Because this operation will directly look up the asset's views in Atlan, you must [provide it an `AtlanClient`](../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

1. You can then iterate through each asset's viewers.
2. Name of the user who viewed the asset.
3. Number of times the user viewed the asset.
4. Number of distinct users that have viewed the asset.

| POST /api/meta/search/searchlog | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 ``` | ``` {  "dsl": {    "from": 0,    "size": 0,    "aggregations": {      "uniqueAssets": {        "aggregations": {          "uniqueUsers": {            "cardinality": {              "field": "userName",              "precision_threshold": 1000            }          }        },        "terms": {          "field": "entityGuidsAll",          "size": 10 // (1)          // (2)        }      },      "totalDistinctUsers": {        "cardinality": {          "field": "userName",          "precision_threshold": 1000        }      }    },    "query": {      "bool": {        "must_not": [          {            "terms": {              "userName": [                "atlansupport"              ] // (3)            }          }        ],        "filter": [          {            "term": {              "utmTags": {                "value": "action_asset_viewed"              }            }          },          {            "bool": {              "minimum_should_match": 1,              "should": [                {                  "term": {                    "utmTags": {                      "value": "ui_profile"                    }                  }                },                {                  "term": {                    "utmTags": {                      "value": "ui_sidebar"                    }                  }                }              ]            }          }        ]      }    },    "sort": [      {        "timestamp": {          "order": "asc"        }      }    ],    "track_total_hits": true  } }  ``` |

1. **Maximum number of assets** to be considered for the search log request
2. If you want to retrieve most viewed assets based on the most distinct users,
regardless of total views, include `"order": [{"uniqueUsers": "desc"}]` here.
3. Optionally, you may provide a list of usernames to be excluded from the search log results.

Detailed search log entries[¶](#detailed-search-log-entries "Permanent link")
-----------------------------------------------------------------------------

[3\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/3.1.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve detailed search log entries (paged via lazy fetching):

Java

Python

Kotlin

Raw REST API

| To retrieve detailed search log entries | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` SearchLog.viewsByGuid(         client,         "955c455d-cfea-4c9c-844d-e226edf8b6da",         List.of("atlansupport")     ) // (1)     .stream() // (2)     .limit(100) // (3)     .forEach(entry -> { // (4)         logger.info(entry.getUserName() + " from " + entry.getIpAddress());     });  ``` |

1. You must provide the `GUID` of the asset for which you are seeking the detailed search log entries.

    * Optionally, you may provide a list of usernames to be excluded from the search log results.
        Because this operation will directly look up the asset's views in Atlan, you must [provide it an `AtlanClient`](../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. The search will only run when you call the `stream()` method,
which will then lazily\-load each page of results into a stream
3. With streaming, you can apply your own limits to the maximum number of results you want to process.

    Independent of page size

    Note that this is independent of page size. You could page through results 50 at a time, but only process a maximum of 100 total results this way. Since the results are lazily\-loaded when streaming, only the first two pages of results would be retrieved in such a scenario.
4. You can then iterate through each `log entry` to retrieve details
such as the **username** and **IP address** of the search logs.

| To retrieve detailed search log entries | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.search_log import SearchLogRequest  client = AtlanClient()  request = SearchLogRequest.views_by_guid(  # (1)     guid="955c455d-cfea-4c9c-844d-e226edf8b6da",     size=20,     exclude_users=["atlansupport"], )  response = client.search_log.search(criteria=request, bulk=False) # (2)  for entry in response: # (3)     LOGGER.info(f"{entry.user_name} from {entry.ip_address}")  ``` |

1. You must provide the `GUID` of the asset and specify
the **maximum number of log entries per page** for the search log request.
    * Optionally, you may provide a list of usernames
     to be excluded from the search log results.
2. `client.search_log.search()` method takes following parameters:

    * `criteria`: defines the search query to execute the search.
        * `bulk`(**default: False**): specifies whether to execute the search in bulk mode for retrieving the search logs matching the criteria. This mode is optimized for handling large results (more than `10,000`). When enabled (`True`), the results will be reordered based on the creation timestamp to facilitate iterating through large datasets.
        Note

    If the number of results exceeds the predefined threshold
        (`10,000` assets) search log search will be automatically converted into a `bulk` search.
3. You can then iterate through each `log entry` to
retrieve details such as the **username** and **IP address** of the search logs.

| To retrieve detailed search log entries | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ```   SearchLog.viewsByGuid(         client,         "955c455d-cfea-4c9c-844d-e226edf8b6da",         listOf("atlansupport")     ) // (1)     .stream() // (2)     .limit(100) // (3)     .forEach { entry -> // (4)         logger.info { "${entry.userName} from ${entry.ipAddress}" }     }  ``` |

1. You must provide the `GUID` of the asset for which you are seeking the detailed search log entries.

    * Optionally, you may provide a list of usernames to be excluded from the search log results.
        Because this operation will directly look up the asset's views in Atlan, you must [provide it an `AtlanClient`](../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. The search will only run when you call the `stream()` method,
which will then lazily\-load each page of results into a stream
3. With streaming, you can apply your own limits to the maximum number of results you want to process.

    Independent of page size

    Note that this is independent of page size. You could page through results 50 at a time, but only process a maximum of 100 total results this way. Since the results are lazily\-loaded when streaming, only the first two pages of results would be retrieved in such a scenario.
4. You can then iterate through each log entry to retrieve details
such as the **username** and **IP address** of the search logs.

| POST /api/meta/search/searchlog | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 ``` | ``` {     "dsl": {       "from": 0,       "size": 100, // (1)       "query": {         "bool": {           "must_not": [             {               "terms": {                 "userName": [                   "atlansupport"                 ] // (3)               }             }           ],           "filter": [             {               "term": {                 "utmTags": {                   "value": "action_asset_viewed"                 }               }             },             {               "term": {                 "entityGuidsAll": {                   "value": "955c455d-cfea-4c9c-844d-e226edf8b6da", // (2)                   "case_insensitive": false                 }               }             },             {               "bool": {                 "minimum_should_match": 1,                 "should": [                   {                     "term": {                       "utmTags": {                         "value": "ui_profile"                       }                     }                   },                   {                     "term": {                       "utmTags": {                         "value": "ui_sidebar"                       }                     }                   }                 ]               }             }           ]         }       },       "sort": [         {           "timestamp": {             "order": "asc"           }         }       ],       "track_total_hits": true     } }  ``` |

1. Page size of the search log request.
2. `GUID` of the asset for which you are seeking the detailed search log entries.
3. Optionally, you may provide a list of usernames to be excluded from the search log results.

---

2023\-12\-122024\-12\-25

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/search-logs/) to provide us with more information. 

Back to top

[Previous Review changes to an asset](../advanced-examples/history/) [Next Get all assets that...](../common-examples/finding/) 

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

