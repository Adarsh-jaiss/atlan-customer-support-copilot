# Source URL
https://developer.atlan.com/sdks/raw/

================================================================================

<!--
canonical: https://developer.atlan.com/sdks/raw/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: We recommend using one of our SDKs, which ultimately use these REST APIs.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: We recommend using one of our SDKs, which ultimately use these REST APIs.
meta-og-image: https://developer.atlan.com/assets/images/social/sdks/raw.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Raw REST API - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/sdks/raw/
meta-twitter:card: summary_large_image
meta-twitter:description: We recommend using one of our SDKs, which ultimately use these REST APIs.
meta-twitter:image: https://developer.atlan.com/assets/images/social/sdks/raw.png
meta-twitter:title: Raw REST API - Developer
meta-viewport: width=device-width,initial-scale=1
title: Raw REST API - Developer
-->

[Skip to content](#raw-rest-api) Developer Raw REST API Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Raw REST API
============

Atlan University

Walk through step\-by\-step in our [intro to custom integration course](https://university.atlan.com/training/e12dcbe2-0ad9-11ee-8e89-06e5f0a66511/overview) (30 mins).

**Not for the faint of heart**

There are a number of details and nuances to understand about the underlying REST APIs to use them most effectively:

* the underlying REST API communications (HTTP protocols, methods, headers, endpoint URLs, response codes, etc)
* translating the complex JSON structures for each request and response payload
* knowing exactly which values are required (and which aren't) depending on the object you're interacting with, what operation you're carrying out, etc
* (including which exact string (and capitalization) to use for values that are really enumerations behind\-the\-scenes)

Ultimately, all pull\-based integration mechanisms (including the SDKs) use the REST API; however, the SDKs also encode best practices to avoid the need to understand all these details and low\-level nuances.

If you want to adopt these best practices from the start, we would **strongly recommend** directly using any of our SDKs rather than the raw REST APIs directly:

* [**Java**](../java/)
* [**Python**](../python/)
* [**Kotlin**](../kotlin/)

That being said, we have documented the raw REST API interactions in most cases. So if you *really* want to interact with the APIs directly, there should still be some guidance — anywhere you see **Raw REST API** gives details on endpoint URLs, methods, and payloads.

Postman[¶](#postman "Permanent link")
-------------------------------------

If all you really want to do is some initial experimentation directly against the API, you can use [Postman](https://getpostman.com) .

We do not maintain a Postman collection of requests, but you can use the **Raw REST API** tab to find the endpoint and an example payload to use for most operations here on developer.atlan.com.

OpenAPI spec[¶](#openapi-spec "Permanent link")
-----------------------------------------------

Why not just publish an OpenAPI spec?

We did try this in the past, as we liked the idea of generating client libraries using tools like the [OpenAPI Generator](https://openapi-generator.tech/) .

Unfortunately, in our own testing of these tools, we found that:

- [x] We could generate code that is free from syntax errors, but
- [ ] the generated code was not fully functional.

Problems we found:

- [ ] The generated code drops significant portions of data from payloads. (Our APIs are payload\-rich and endpoint\-light, while the generators seem to favor endpoint\-rich and payload\-light APIs.)
- [ ] The various objects the generator creates often make developer consumption cumbersome — long, difficult\-to\-read object names; many variations of similar objects; and so on.
- [ ] The generated code naturally does not include any validation that can't be encoded in the OpenAPI spec. To add this we'd need to wrap the generated code with another layer anyway.

After several attempts at mangling the OpenAPI spec to meet the constraints of the code generator, we eventually decided to go the way we've seen other API\-first companies adopt. We found very few API\-first companies appear to rely on these code generators, but rather directly maintain their own SDKs for which they may have their own code generators. (Which is in fact exactly what we're doing as well.)

Request for feedback
--------------------

If you use the raw REST APIs rather than one of the provided SDKs, we would love to understand more. If you can spare a few minutes to [fill out our survey](https://docs.google.com/forms/d/e/1FAIpQLSefT0YDg3IOTTP30YKQjwPaWCaKmBKyrGFdHFgUY-lEfdz2NA/viewform?usp=sf_link) , we would be very grateful!

---

2023\-12\-072025\-03\-06

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/sdks/raw/) to provide us with more information. 

Back to top

[Previous Events](../events/) [Next Site map](../../concepts/) 

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

