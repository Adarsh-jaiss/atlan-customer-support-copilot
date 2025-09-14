# Source URL
https://developer.atlan.com/sdks/kotlin/

================================================================================

<!--
canonical: https://developer.atlan.com/sdks/kotlin/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: You can reuse the Java SDK: available on Maven Central and ready to be included in your project.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: You can reuse the Java SDK: available on Maven Central and ready to be included in your project.
meta-og-image: https://developer.atlan.com/assets/images/social/sdks/kotlin.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Kotlin SDK - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/sdks/kotlin/
meta-twitter:card: summary_large_image
meta-twitter:description: You can reuse the Java SDK: available on Maven Central and ready to be included in your project.
meta-twitter:image: https://developer.atlan.com/assets/images/social/sdks/kotlin.png
meta-twitter:title: Kotlin SDK - Developer
meta-viewport: width=device-width,initial-scale=1
title: Kotlin SDK - Developer
-->

[Skip to content](#st0fillurlsvgid_1_-kotlin-sdk) Developer Kotlin SDK Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

xml version\="1\.0" encoding\="utf\-8"? Kotlin SDK[¶](#st0fillurlsvgid_1_-kotlin-sdk "Permanent link")
======================================================================================================

Obtain the SDK[¶](#obtain-the-sdk "Permanent link")
---------------------------------------------------

For Kotlin, you can reuse the existing [Java SDK](../java/) as\-is. It is available on Maven Central, ready to be included in your project:

Gradle

build.gradle.kts
```
repositories {
    mavenCentral()
}

dependencies {
    implementation("com.atlan:atlan-java:+") // (1)
    implementation("io.github.microutils:kotlin-logging-jvm:3.0.5") // (2)
    implementation("org.slf4j:slf4j-simple:2.0.7")
}

```
1. Include the latest version of the Java SDK in your project as a dependency. You can also give a specific version instead of the `+`, if you'd like.
2. The Java SDK uses slf4j for logging purposes. You can include slf4j\-simple as a simple binding mechanism to send any logging information out to your console (standard out), along with the `kotlin-logging-jvm` microutil.

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

| AtlanLiveTest.kt | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` import com.atlan.AtlanClient  fun main() {     AtlanClient().use { client ->         // Do something with the client     } }  ``` |

### On client creation[¶](#on-client-creation "Permanent link")

If you prefer to not use environment variables, you can do the following:

| AtlanLiveTest.kt | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` import com.atlan.AtlanClient  fun main() {     AtlanClient(         "https://tenant.atlan.com",         "...")     ) {         // Do something with the client     } }  ``` |

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

The SDK defines checked exceptions for the following categories of error:

| Exception | Description |
| --- | --- |
| `ApiConnectionException` | Errors when the SDK is unable to connect to the API, for example due to a lack of network access or timeouts. |
| `AuthenticationException` | Errors when the API token configured for the SDK is invalid or expired. |
| `ConflictException` | Errors when there is some conflict with an existing [asset](../../getting-started/#what-is-an-asset) and the operation cannot be completed as a result. |
| `InvalidRequestException` | Errors when the request sent to Atlan does not match its expectations. If you are using the built\-in methods like `toCreate()` and `toUpdate()` this exception should be treated as a bug in the SDK. (These operations take responsibility for avoiding this error.) |
| `LogicException` | Errors where some assumption made in the SDK's code is proven incorrect. If ever raised, they should be reported as bugs against the SDK. |
| `NotFoundException` | Errors when the requested resource or [asset](../../getting-started/#what-is-an-asset) does not exist in Atlan. |
| `PermissionException` | Errors when the API token used by the SDK does not have permission to access a resource or carry out an operation on a specific [asset](../../getting-started/#what-is-an-asset). |
| `RateLimitException` | Errors when the Atlan server is being overwhelmed by requests. |

A given API call could fail due to all of the errors above. So these all extend a generic `AtlanException` checked exception, and all API operations throw `AtlanException`.

Example

For example, when creating a connection there is an asynchronous process that grants permissions to the admins of that connection. So there can be a slight delay between creating the connection and being permitted to do any operations with the connection. During that delay, any attempt to interact with the connection will result in a `PermissionException`, even if your API token was used to create connection in the first place.

Another example you may occasionally hit is some network issue that causes your connection to Atlan to be interrupted. In these cases, an `ApiConnectionException` will be raised.

Don't worry, the SDK retries automatically

While these are useful to know for detecting issues, the SDK [automatically retries](#retries) on such problems.

Advanced configuration[¶](#advanced-configuration "Permanent link")
-------------------------------------------------------------------

Atlan is a distributed, cloud\-native application, where network problems can arise. These advanced configuration options allow you to optimize how the SDK handles such ephemeral problems.

### Logging[¶](#logging "Permanent link")

The SDK uses slf4j to be logging framework\-agnostic. You can therefore configure your own preferred logging framework:

Log4j2

build.gradle.kts
```
dependencies {
    implementation("com.atlan:atlan-java:+")
    implementation("io.github.microutils:kotlin-logging-jvm:3.0.5")
    implementation("org.apache.logging.log4j:log4j-core:2.22.0") // (1)
    implementation("org.apache.logging.log4j:log4j-slf4j2-impl:2.22.0")
}

```
1. Replace the `org.slf4j:slf4j-simple:2.0.7` binding with log4j2 bindings.

src/main/resources/log4j2\.xml
```
<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="WARN">
    <Appenders>
        <Console name="ConsoleAppender" target="SYSTEM_OUT">
            <PatternLayout>
                <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
            </PatternLayout>
        </Console>
        <File name="FileAppender" fileName="tmp/debug.log" append="false">
            <PatternLayout>
                <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
            </PatternLayout>
        </File>
    </Appenders>
    <Loggers>
        <Root level="DEBUG">
            <AppenderRef ref="ConsoleAppender" level="INFO"/>
            <AppenderRef ref="FileAppender"/>
        </Root>
        <Logger name="com.atlan" level="DEBUG"/>
    </Loggers>
</Configuration>

```

### Retries[¶](#retries "Permanent link")

The SDK handles automatically retrying your requests when it detects certain problems:

* When an `ApiConnectionException` occurs that is caused by an underlying `ConnectException` or `SocketTimeoutException`.
* When there is a `403` response indicating that permission for an operation is not (yet) available.
* When there is a `500` response indicating that something went wrong on the server side.

**More details on how they work**

If any request encounters one of these problems, it will be retried. Before each retry, the SDK will apply a delay using:

* An exponential backoff (starting from 500ms)
* A jitter (in the range of 75\-100% of the backoff delay)

Each retry will be at least 500ms, and at most 5s.

(Currently these values are not configurable.)

For each request that encounters any of these problems, only up to a maximum number of retries will be attempted. (This is set to `3` by default.)

You can configure the maximum number of retries globally using `setMaxNetworkRetries()` on a client. Set this to an integer:

Configure the maximum number of retries
```
AtlanClient().use { client ->
    client.setMaxNetworkRetries(10)
}

```

### Timeouts[¶](#timeouts "Permanent link")

The SDK will only wait so long for a response before assuming a network problem has occurred and the request should be timed out. By default, this is set to `80` seconds.

You can configure the maximum time the SDK will wait before timing out a request using `setReadTimeout()` on a client. Set this to an integer giving the number of milliseconds before timing out:

Configure the maximum time to wait before timing out
```
AtlanClient().use { client ->
    client.setReadTimeout(120 * 1000) // (1)!
}

```
1. Remember this must be given in milliseconds. This example sets the timeout to 2 minutes (120 seconds \* 1000 milliseconds).

### Multi\-tenant connectivity[¶](#multi-tenant-connectivity "Permanent link")

Since version 0\.9\.0, the Java SDK supports connecting to multiple tenants. From version 4\.0\.0 onwards you can create any number of clients against any number of different tenants, since every operation that interacts with a tenant now explicitly requires a client to be provided to it:

| Create a client | |
| --- | --- |
| ``` 1 2 3 ``` | ``` AtlanClient("https://tenant.atlan.com").use { client -> // (1)!     client.setApiToken("...") }  ``` |

1. Constructing a new client with a different tenant's URL is sufficient to create connectivity to that other tenant. You can also (optionally) provide a second argument to directly give the API token for the tenant.

| Use a specific client | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` AtlanClient().use { client ->     val term = GlossaryTerm.creator( // (1)             "Example Term",             "836830be-5a11-4094-8346-002e0320684f",             null)         .build()     client.assets.save(term) // (2)     client.assets.save(         term,         RequestOptions.from(client).maxNetworkRetries(10).build()) // (3)     term.save(client) // (4) }  ``` |

1. Create an object as usual.
2. You can access the operations for assets directly on the client, under `client.assets`. These will generally give you the most flexibility — they can handle multiple objects at a time and allow overrides.
3. Every operation on the client itself has a variant with an (optional) final argument through which you can override settings like retry limits or timeouts for this single request. You can use the `from(client)` factory method to initialize the request options with all the settings of your client, and then you only need to chain on those you want to override for this particular request.
4. Alternatively, you can pass the client to the operation on the object itself.

Limit the number of clients to those you must have

Each client you create maintains its own independent copy of various caches. So the more clients you have, the more resources your code will consume. For this reason, we recommended limiting the number of clients you create to the bare minimum you require — ideally just a single client per tenant.

### Using a proxy[¶](#using-a-proxy "Permanent link")

To use the Java SDK with a proxy, you need to send in some additional parameters when running any `java ...` command.

These are described in detail in the [Java documentation](https://docs.oracle.com/javase/8/docs/technotes/guides/net/proxies.html) , but are summarized here for simplicity:

HTTPS

SOCKS

* `https.proxyHost` should be set to the hostname for your HTTPS proxy
* `https.proxyPort` should be set to the port for your HTTPS proxy (default being 443\)

| Run command using an HTTPS proxy | |
| --- | --- |
| ``` 1 ``` | ``` java -Dhttps.proxyHost=hostname -Dhttps.proxyPort=8080 com.atlan.samples.SomeClassToRun  ``` |

* `socksProxyHost` should be set to the hostname for your SOCKS proxy
* `socksProxyPort` should be set to the port for your SOCKS proxy (default being 1080\)

| Run command using a SOCKS proxy | |
| --- | --- |
| ``` 1 ``` | ``` java -DsocksProxyHost=hostname -DsocksProxyPort=8080 com.atlan.samples.SomeClassToRun  ``` |

Providing credentials to the proxy

In either case, if you need to authenticate to your proxy, you will need to wrap whatever code you want to run to set up these credentials using something like the following:

| Authenticate to proxy | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` val pa = PasswordAuthentication( // (1)     "username", // (2)     "password".toCharArray()) // (3) AtlanClient().use { client ->     client.setProxyCredential(pa) // (4) }  ``` |

1. You need to create a built\-in Java `PasswordAuthentication` object.
2. Provide your username as the first argument.
3. ...and your password as the second argument, as a `char[]`. (Of course, you should **not** hard\-code your password in your code itself, but rather pull it from elsewhere.)
4. Then use `setProxyCredential()` to pass this `PasswordAuthentication` object to the Atlan client, before any of the rest of the code will execute.

---

2023\-04\-192025\-06\-10

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/sdks/kotlin/) to provide us with more information. 

Back to top

[Previous Python](../python/) [Next Scala](../scala/) 

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

