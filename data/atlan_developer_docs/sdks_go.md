# Source URL
https://developer.atlan.com/sdks/go/

================================================================================

<!--
canonical: https://developer.atlan.com/sdks/go/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: The Go SDK is available on GitHub, ready to be included in your project.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: The Go SDK is available on GitHub, ready to be included in your project.
meta-og-image: https://developer.atlan.com/assets/images/social/sdks/go.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Go SDK - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/sdks/go/
meta-twitter:card: summary_large_image
meta-twitter:description: The Go SDK is available on GitHub, ready to be included in your project.
meta-twitter:image: https://developer.atlan.com/assets/images/social/sdks/go.png
meta-twitter:title: Go SDK - Developer
meta-viewport: width=device-width,initial-scale=1
title: Go SDK - Developer
-->

[Skip to content](#go-sdk) Developer Go SDK Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Go SDK[¶](#go-sdk "Permanent link")
===================================

Obtain the SDK[¶](#obtain-the-sdk "Permanent link")
---------------------------------------------------

Pre\-release state

The Go SDK is currently in a pre\-release, experimental state. While in this state, we reserve the right to make any changes to it (including breaking changes) without worrying about backwards compatibility, semantic versioning, and so on.

If you are eager to experiment with it, it is available on  [GitHub](https://github.com/atlanhq/atlan-go). You can use Go dependencies to install it directly from there.

We welcome your feedback during the pre\-release, but cannot commit to any specific revisions or timelines at this point in time.

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

| main.go | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` package main  import (     "github.com/atlanhq/atlan-go/atlan/assets" )  func main() {     ctx := assets.NewContext() }  ``` |

### On client creation[¶](#on-client-creation "Permanent link")

If you prefer to not use environment variables, you can do the following:

| main.go | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` package main  import (     "github.com/atlanhq/atlan-go/atlan/assets" )  func main() {     ctx, _ := assets.Context("https://tenant.atlan.com", "...") }  ``` |

Careful not to expose your API token!

We generally discourage including your API token directly in your code, in case you accidentally commit it into a (public) version control system. But it's your choice exactly how you manage the API token and including it for use within the client.

That's it — once these are set you can start using your SDK to make live calls against your Atlan instance! 🎉

What's next?[¶](#whats-next "Permanent link")
---------------------------------------------

Delve into more detailed examples:

* ---

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

Advanced configuration[¶](#advanced-configuration "Permanent link")
-------------------------------------------------------------------

Atlan is a distributed, cloud\-native application, where network problems can arise. The SDK therefore automatically attempts to handle ephemeral problems.

### Logging[¶](#logging "Permanent link")

The SDK uses the [slog](https://pkg.go.dev/log/slog)  library internally to provide a flexible framework for emitting log messages.

Go

You can enable logging for your SDK script by adding the following lines above your snippets:

| main.go | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` package main  import (     "github.com/atlanhq/atlan-go/atlan/assets" )  func main() {     ctx := assets.NewContext()     ctx.SetLogger(true, "debug") // (1)! }  ``` |

1. You can enable logging by using `.SetLogger()` on the context object with various logging levels:

    * `"debug"`: used to give detailed information, typically of interest only when diagnosing problems (mostly used level in SDK).
        * `"info"`: used to confirm that things are working as expected.
        * `"warn"`: used as an indication that something unexpected happened, or as a warning of some problem in the near future.
        * `"error"`: indicates that due to a more serious problem, the SDK has not been able to perform some operation.

---

2024\-06\-112024\-11\-25

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/sdks/go/) to provide us with more information. 

Back to top

[Previous Clojure](../clojure/) [Next Events](../events/) 

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

