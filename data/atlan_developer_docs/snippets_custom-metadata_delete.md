# Source URL
https://developer.atlan.com/snippets/custom-metadata/delete/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/custom-metadata/delete/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to delete custom metadata structures in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to delete custom metadata structures in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/custom-metadata/delete.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Delete custom metadata - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/custom-metadata/delete/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to delete custom metadata structures in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/custom-metadata/delete.png
meta-twitter:title: Delete custom metadata - Developer
meta-viewport: width=device-width,initial-scale=1
title: Delete custom metadata - Developer
-->

[Skip to content](#delete-custom-metadata) Developer Delete custom metadata Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/types/typedef/name/{name} (DELETE)](../../../endpoints/#tag:apimetatypestypedefnamename-delete)

Delete custom metadata[¶](#delete-custom-metadata "Permanent link")
===================================================================

There are limits to the number of custom metadata properties you can create

Atlan currently preserves details of custom metadata in its audit log. This allows Atlan to retain an audit trail of actions users took on custom metadata on each asset, even if the custom metadata definition itself is deleted.

However, this also places an upper limit on the number of custom metadata properties you can create in Atlan. Even if you delete the custom metadata definitions, any that you have previously defined will still take up "space" within this limit.

**More details**

By default this is \~1000 properties. If you see an error like the following, it means you have reached this limit:

```
{
  "errorCode": "ATLAS-500-00-001",
  "errorMessage": "Unable to push entity audits to ES",
  "errorCause": "[{type=mapper_parsing_exception, reason=failed to parse, caused_by={type=illegal_argument_exception, reason=Limit of total fields [1000] has been exceeded while adding new fields [5]}}]"
}

```
You will need to contact Atlan support to extend this threshold if you reach it.

[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To delete a custom metadata structure:

Java

Python

Kotlin

Raw REST API

| Delete custom metadata structure | |
| --- | --- |
| ``` 1 ``` | ``` CustomMetadataDef.purge(client, "RACI"); // (1)  ``` |

1. You only need to call the `CustomMetadataDef.purge()` method with the human\-readable name of the custom metadata structure, and it will be deleted. Because this operation will remove the structure from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Delete custom metadata structure | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` from pyatlan.model.typedef import CustomMetadataDef from pyatlan.client.atlan import AtlanClient  client = AtlanClient() response = client.typedef.purge("RACI", CustomMetadataDef) # (1)  ``` |

1. You only need to call the `typedef.purge()` method with the human\-readable name of the custom metadata structure, and it will be deleted.

| Delete custom metadata structure | |
| --- | --- |
| ``` 1 ``` | ``` CustomMetadataDef.purge(client, "RACI") // (1)  ``` |

1. You only need to call the `CustomMetadataDef.purge()` method with the human\-readable name of the custom metadata structure, and it will be deleted. Because this operation will remove the structure from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| DELETE /api/meta/types/typedef/name/MNJ8mpLsIOaP4OQnLNhRta | |
| --- | --- |
| ``` 1 ``` | ```   ``` |

Use the hashed\-string representation

When deleting the custom metadata structure using the raw API, you must use the hashed\-string representation of its name in the API call.

---

2023\-03\-072025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/custom-metadata/delete/) to provide us with more information. 

Back to top

[Previous Update custom metadata](../update/) [Next Manage badges](../badge/) 

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

