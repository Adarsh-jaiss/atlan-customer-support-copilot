# Source URL
https://developer.atlan.com/sdks/python/

================================================================================

<!--
canonical: https://developer.atlan.com/sdks/python/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: The Python SDK is available on pypi, ready to be included in your project.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: The Python SDK is available on pypi, ready to be included in your project.
meta-og-image: https://developer.atlan.com/assets/images/social/sdks/python.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Python SDK - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/sdks/python/
meta-twitter:card: summary_large_image
meta-twitter:description: The Python SDK is available on pypi, ready to be included in your project.
meta-twitter:image: https://developer.atlan.com/assets/images/social/sdks/python.png
meta-twitter:title: Python SDK - Developer
meta-viewport: width=device-width,initial-scale=1
title: Python SDK - Developer
-->

[Skip to content](#python-sdk) Developer Python SDK Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Python SDK[¶](#python-sdk "Permanent link")
===========================================

Atlan University

Walk through step\-by\-step in our [intro to custom integration course](https://university.atlan.com/training/e12dcbe2-0ad9-11ee-8e89-06e5f0a66511/overview) (30 mins).

Obtain the SDK[¶](#obtain-the-sdk "Permanent link")
---------------------------------------------------

The SDK is currently available on  [pypi](https://pypi.org/project/pyatlan/). You can use pip to install it as follows:

Install the SDK
```
pip install pyatlan

```

Configure the SDK[¶](#configure-the-sdk "Permanent link")
---------------------------------------------------------

There are two ways to configure the  SDK:

### Using environment variables[¶](#using-environment-variables "Permanent link")

* `ATLAN_API_KEY` should be given your Atlan [API token](https://ask.atlan.com/hc/en-us/articles/8312649180049) , for authentication (*don't forget to assign one or more personas to the API token to give access to existing assets!*)
* `ATLAN_BASE_URL` should be given your Atlan URL (for example, `https://tenant.atlan.com`)

Here's an example of setting those environment variables:

Set environment variables
```
export ATLAN_BASE_URL=https://tenant.atlan.com
export ATLAN_API_KEY="..."

```

| atlan\_live\_test.py | |
| --- | --- |
| ``` 1 2 3 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  ``` |

### On client creation[¶](#on-client-creation "Permanent link")

If you prefer to not use environment variables, you can do the following:

| atlan\_live\_test.py | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient(     base_url="https://tenant.atlan.com",     api_key="..." )  ``` |

Careful not to expose your API token!

We generally discourage including your API token directly in your code, in case you accidentally commit it into a (public) version control system. But it's your choice exactly how you manage the API token and including it for use within the client.

**(optional) Want to create a client using an API token GUID?**

In some scenarios, you may not want to expose the entire API token or manage environment variables. Instead, you can provide the **GUID** of the API token, and the SDK will internally fetch the actual access token.

**When to use this approach:**

* Building apps that use the SDK where token security is a concern
* When you want to avoid exposing full API tokens in your configuration
* For containerized applications that need secure token management

**Prerequisites:**

Before using this approach, ensure your Argo template is configured with `CLIENT_ID` and `CLIENT_SECRET`:

| Argo template configuration | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` container:   image: ghcr.io/atlanhq/designation-based-group-provisioning:1.0.2   imagePullPolicy: IfNotPresent   env:     - name: CLIENT_ID       valueFrom:         secretKeyRef:           name: "argo-client-creds"           key: "login"     - name: CLIENT_SECRET       valueFrom:         secretKeyRef:           name: "argo-client-creds"           key: "password"  ``` |

Python

[7\.1\.4](https://github.com/atlanhq/atlan-python/releases/tag/7.1.4 "Minimum version")

| Creating a client with API token GUID | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.fluent_search import FluentSearch from pyatlan.model.query import CompoundQuery from pyatlan.model.assets import AtlasGlossary  # Initialize client using API token GUID token_client = AtlanClient.from_token_guid(     guid="c5e249d7-abcc-4ad5-87a1-831d7b810df4"  # (1) )  # Perform operations with the client (requires appropriate permissions) results = (     FluentSearch()     .where(CompoundQuery.active_assets())     .where(CompoundQuery.asset_type(AtlasGlossary))     .page_size(100)     .execute(client=token_client) )  assert results and results.count >= 1 print(f"Found {results.count} glossary assets")  ``` |

1. **Create client from token GUID**: Use `AtlanClient.from_token_guid()` to create a client using the GUID of an API token. The SDK will automatically fetch the actual access token using the configured `CLIENT_ID` and `CLIENT_SECRET`.

That's it — once these are set you can start using your SDK to make live calls against your Atlan instance! 🎉

What's next?[¶](#whats-next "Permanent link")
---------------------------------------------

Delve into more detailed examples:

* **Common tasks**

---

    Common operations on assets, that are available across all assets.

     [Discover actions](../../snippets/)
* **Asset\-specific**

---

    Operations that are specific to certain assets.

     [Focus on a specific kind of asset](../../patterns/)
* **Governance structures**

---

    Operations dealing with governance structures, rather than assets.

     [Manage governance structures](../../governance/)
* **Samples**

---

    Real code samples our customers use to solve particular use cases.

     [Review live samples](https://solutions.atlan.com/tags/#code-available)
* **Searching**

---

    Delve deep into searching and aggregating metadata.

     [Learn more about searching](../../search/)
* **Events**

---

    Delve deep into the details of the events Atlan triggers.

     [Learn more about events](../../events/)

Error\-handling[¶](#error-handling "Permanent link")
----------------------------------------------------

The SDK defines exceptions for the following categories of error:

| Exception | Description |
| --- | --- |
| `ApiConnectionError` | Errors when the SDK is unable to connect to the API, for example due to a lack of network access or timeouts. |
| `AuthenticationError` | Errors when the API token configured for the SDK is invalid or expired. |
| `ConflictError` | Errors when there is some conflict with an existing [asset](../../getting-started/#what-is-an-asset) and the operation cannot be completed as a result. |
| `InvalidRequestError` | Errors when the request sent to Atlan does not match its expectations. If you are using the built\-in methods like `toCreate()` and `toUpdate()` this exception should be treated as a bug in the SDK. (These operations take responsibility for avoiding this error.) |
| `LogicError` | Errors where some assumption made in the SDK's code is proven incorrect. If ever raised, they should be reported as bugs against the SDK. |
| `NotFoundError` | Errors when the requested resource or [asset](../../getting-started/#what-is-an-asset) does not exist in Atlan. |
| `PermissionError` | Errors when the API token used by the SDK does not have permission to access a resource or carry out an operation on a specific [asset](../../getting-started/#what-is-an-asset). |
| `RateLimitError` | Errors when the Atlan server is being overwhelmed by requests. |

A given API call could fail due to all of the errors above. So these all extend a generic `AtlanError` exception, and all API operations can potentially raise `AtlanError`.

Example

For example, when creating a connection there is an asynchronous process that grants permissions to the admins of that connection. So there can be a slight delay between creating the connection and being permitted to do any operations with the connection. During that delay, any attempt to interact with the connection will result in a `PermissionError`, even if your API token was used to create connection in the first place.

Another example you may occasionally hit is some network issue that causes your connection to Atlan to be interrupted. In these cases, an `ApiConnectionError` will be raised.

Don't worry, the SDK retries automatically

While these are useful to know for detecting issues, the SDK [automatically retries](#retries) on such problems.

Advanced configuration[¶](#advanced-configuration "Permanent link")
-------------------------------------------------------------------

Atlan is a distributed, cloud\-native application, where network problems can arise. The SDK therefore automatically attempts to handle ephemeral problems.

### Logging[¶](#logging "Permanent link")

The SDK uses [logging module](https://docs.python.org/3/library/logging.html) of the standard library that can provide a flexible framework for emitting log messages.

Python

You can enable logging for your SDK script by
adding the following lines above your snippets:

| atlan\_python\_sdk\_test.py | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` import logging from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossary  logging.basicConfig(level=logging.DEBUG) # (1)  # logging.config.fileConfig('pyatlan/logging.conf') # (2)  # SDK code snippets client = AtlanClient()  glossary = client.asset.get_by_guid(     asset_type=AtlasGlossary,     guid="b4113341-251b-4adc-81fb-2420501c30e6" )  ``` |

1. You can enable logging by using `basicConfig` with various logging levels:

    * `logging.DEBUG`: used to give detailed information,
        typically of interest only when diagnosing problems (mostly used level in SDK).
        * `logging.INFO`: used to confirm that things are working as expected.
        * `logging.WARN`: used as an indication that something unexpected happened,
        or as a warning of some problem in the near future.
        * `logging.ERROR`: indicates that due to a more serious problem, the SDK
        has not been able to perform some operation.
        * `logging.CRITICAL`: indicates a serious error, suggesting that the
        program itself may be unable to continue running (not used in SDK as of now).
2. By default, logs will appear in your console.
If you want to use file logging, you can add the following line:

    * `logging.config.fileConfig('pyatlan/logging.conf')`: this will
        generate logs according to the configuration defined in `pyatlan/logging.conf` and will generate two log files:

    + `/tmp/pyatlan.log`: default log file.
            + `/tmp/pyatlan.json`: log file in JSON format.

### Retries[¶](#retries "Permanent link")

The SDK handles automatically retrying your requests when it detects certain problems:

* When there is a `403` response indicating that permission for an operation is not (yet) available.
* When there is a `429` response indicating that the request rate limit has been exceeded, and you need to retry after some time.
* When there is a `50x` response indicating that something went wrong on the server side.

**More details on how they work**

If any request encounters one of these problems, it will be retried. Before each retry, the SDK will apply a delay using an exponential backoff.

(Currently the values for the exponential backoff are not configurable.)

For each request that encounters any of these problems, only up to a maximum number of retries will be attempted. (This is set to `5` by default.)

### Timeouts[¶](#timeouts "Permanent link")

By default, the SDK `AtlanClient()` has the following timeout settings:

* `read_timeout`: `900.0` seconds (`15` minutes)
* `connect_timeout`: `30.0` seconds

If you need to override these defaults, you can do so as shown in the example below:

| Override SDK client default timeout | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  # Timeout values in seconds client.read_timeout = 1800.0  # 30 minutes client.connect_timeout = 60.0  # 1 minute  ``` |

### Multi\-tenant connectivity[¶](#multi-tenant-connectivity "Permanent link")

Since version 1\.0\.0, the Python SDK supports connecting to multiple tenants.\[^1] When you use the `AtlanClient()` method you are actually setting a *default* client. This default client will be used behind\-the\-scenes for any operations that need information specific to an Atlan tenant.

When you want to override that default client you can create a new one and use the `set_default_client()` method to change it:

| Create a client | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient  client2 = AtlanClient(  # (1)     base_url="https://tenant.atlan.com",     api_key="..." ) Atlan.set_default_client(client2)  # (2)  ``` |

1. The `AtlanClient()` method will return a client for the given base URL, creating a new client **and** setting this new client as the default client.
2. If you want to switch between clients that you have already created, you can use `Atlan.set_default_client()` to change between them.

Limit the number of clients to those you must have

Each client you create maintains its own independent copy of various caches. So the more clients you have, the more resources your code will consume. For this reason, we recommended limiting the number of clients you create to the bare minimum you require — ideally just a single client per tenant.

(And since in the majority of use cases you only need access to a single tenant, this means you can most likely just rely on the default client and the fallback behavior.)

### Proxies[¶](#proxies "Permanent link")

Pyatlan uses the [Requests](https://requests.readthedocs.io/en/latest/) library which supports [proxy configuration](https://requests.readthedocs.io/en/latest/user/advanced/) via environment variables. Requests relies on the proxy configuration defined by standard environment variables http\_proxy, https\_proxy, no\_proxy, and all\_proxy. Uppercase variants of these variables are also supported. You can therefore set them to configure Pyatlan (only set the ones relevant to your needs):

Configure a proxy
```
export HTTP_PROXY="http://10.10.1.10:3128"
export HTTPS_PROXY="http://10.10.1.10:1080"
export ALL_PROXY="socks5://10.10.1.10:3434"

```
To use HTTP Basic Auth with your proxy, use the *http://user:password@host/* syntax in any of the above configuration entries:

Configure a proxy with authentication
```
export HTTPS_PROXY="http://user:pass@10.10.1.10:1080"

```
Currently, the way this is implemented limits you to either avoiding multiple threads in your Python code (if you need to use multiple clients), or if you want to use multiple threads you should only use a single client.

Asynchronous SDK operations[¶](#asynchronous-sdk-operations "Permanent link")
-----------------------------------------------------------------------------

[8\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/8.0.0 "Minimum version")

Starting from version `v8.0`, it's possible to run SDK code asynchronously. The async API is designed to mirror the synchronous SDK clients, maintaining familiar `client` patterns and `caching` behavior to ensure a smooth developer experience ([see release notes for complete changes](https://github.com/atlanhq/atlan-python/releases/tag/8.0.0)).

To get started, you need to initialize an `AsyncAtlanClient`:

| Create an async client | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.client.aio import AsyncAtlanClient  client = AsyncAtlanClient(  # (1)     base_url="https://tenant.atlan.com",     api_key="..." )  ``` |

1. Create an async client using the same configuration pattern as the synchronous client.

### Basic search example[¶](#basic-search-example "Permanent link")

This example demonstrates how to perform an asynchronous search for tables. The API is nearly identical to the synchronous version, with the addition of `async/await` keywords:

| Run an async search | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` import asyncio from pyatlan.client.aio import AsyncAtlanClient from pyatlan.model.fluent_search import FluentSearch from pyatlan.model.search import Term from pyatlan.model.assets import Asset  client = AsyncAtlanClient(     base_url="https://tenant.atlan.com",     api_key="..." )  async def search_tables():     """Search for all active tables"""     results = await client.asset.search( # (1)         criteria=FluentSearch()         .where(Term.with_state("ACTIVE"))         .where(Asset.TYPE_NAME.eq("Table"))         .to_request(),     )      # Process results asynchronously     async for table in results: # (2)         print(f"Found table: {table.name}")      return results.count  # Run the async function total_count = asyncio.run(search_tables()) print(f"Total tables found: {total_count}")  ``` |

1. **Async search**: Build search requests using the same [`FluentSearch`](../../snippets/advanced-examples/search/) pattern as the synchronous client. Use `await` since the async client returns a coroutine object.
2. **Async iteration**: Use `async for` to iterate through results, as the async client returns `AsyncIndexSearchResults` which implements `__aiter__`.

### Concurrent operations for improved performance[¶](#concurrent-operations-for-improved-performance "Permanent link")

The real power of `async` comes from running multiple operations [concurrently](https://docs.python.org/3/library/asyncio-task.html). Instead of waiting for each operation to complete sequentially, you can execute them in parallel and reduce total execution time:

**Performance comparison:**

* **Synchronous**: Total time \= `operation₁ + operation₂ + ... + operationₙ`
* **Asynchronous**: Total time \= `max(operation₁, operation₂, ..., operationₙ)`

| Run concurrent async searches | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 ``` | ``` import asyncio from pyatlan.client.aio import AsyncAtlanClient from pyatlan.model.fluent_search import FluentSearch from pyatlan.model.search import Term from pyatlan.model.assets import Asset  client = AsyncAtlanClient(     base_url="https://tenant.atlan.com",     api_key="..." )  async def search_tables(): # (1)     """Search for all active tables"""     results = await client.asset.search(         criteria=FluentSearch()         .where(Term.with_state("ACTIVE"))         .where(Asset.TYPE_NAME.eq("Table"))         .to_request(),     )     return results.count  async def search_columns(): # (2)     """Search for all active columns"""     results = await client.asset.search(         criteria=FluentSearch()         .where(Term.with_state("ACTIVE"))         .where(Asset.TYPE_NAME.eq("Column"))         .to_request(),     )     return results.count  async def concurrent_search():     """Run table and column searches concurrently"""     # Execute both searches at the same time     table_count, column_count = await asyncio.gather( # (3)         search_tables(),         search_columns()     )      return {         "tables": table_count,         "columns": column_count,         "total_assets": table_count + column_count     }  async def main():     """Main function to execute concurrent asset searches"""     return await concurrent_search()  if __name__ == "__main__":     result = asyncio.run(main())     print(f"Search completed: {result['total_assets']} assets found")     print(f"Tables: {result['tables']}, Columns: {result['columns']}")  ``` |

1. **Tables search function**: Define an async function to search for tables and return the count.
2. **Columns search function**: Define an async function to search for columns and return the count.
3. **Concurrent execution**: Use `asyncio.gather()` to run both searches simultaneously. You can also use `asyncio.as_completed()` if you want to process results as they become available:

    ```
    tasks = [search_tables(), search_columns()]
    for coro in asyncio.as_completed(tasks):
        result = await coro
        print(f"Operation completed with {result} assets")

    ```

When to use async

Async is most beneficial when you have:

* **Multiple independent operations** that can run concurrently
* **I/O\-heavy workloads** like API calls, database queries, or file operations
* **Long\-running operations** where parallelization provides significant time savings

For simple, single operations, the synchronous client may be more straightforward to use.

---

2023\-06\-282025\-08\-20

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/sdks/python/) to provide us with more information. 

Back to top

[Previous Java](../java/) [Next Kotlin](../kotlin/) 

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

