# Source URL
https://developer.atlan.com/search/

================================================================================

<!--
canonical: https://developer.atlan.com/search/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Understand key concepts such as queries, attributes, sorting, pagination, and aggregation.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Understand key concepts such as queries, attributes, sorting, pagination, and aggregation.
meta-og-image: https://developer.atlan.com/assets/images/social/search/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Introduction to searching in Atlan - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/search/
meta-twitter:card: summary_large_image
meta-twitter:description: Understand key concepts such as queries, attributes, sorting, pagination, and aggregation.
meta-twitter:image: https://developer.atlan.com/assets/images/social/search/index.png
meta-twitter:title: Introduction to searching in Atlan - Developer
meta-viewport: width=device-width,initial-scale=1
title: Introduction to searching in Atlan - Developer
-->

[Skip to content](#introduction-to-searching-in-atlan) Developer Introduction to searching in Atlan Initializing search 

* 
* [Overview](..)
* [Getting started](../getting-started/)
* [Common tasks](../snippets/)
* [Asset\-specific](../patterns/)
* [Governance structures](../governance/)
* [Reference](../reference/)

Introduction to searching in Atlan[¶](#introduction-to-searching-in-atlan "Permanent link")
===========================================================================================

Atlan uses  [Elasticsearch](https://www.elastic.co)  to power its search. For ultimate flexibility, we have also adopted [Elastic's query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html) .

To explain all of the power and flexibility, there are two main areas you must consider when searching in Atlan:

* The [query](queries/) defines what you want to find in your search
* The [attributes](attributes/) define the specific bits of information you can search against, and what details you want included in each result

Then, you can get a bit more advanced by adding in:

* Whether you want to [sort](sort/) those results
* How to [page](paging/) the results, when there are many of them
* Whether you want to [aggregate](aggregation/) any information from those results

Atlan's search index is eventually consistent

Atlan's search index is updated asynchronously from metadata being persisted to the metastore. So there can be small delays between a create, update, or delete operation completing and being able to search for that same information. Usually this is almost immediate (less than 1 second), but if in code you try to immediately search for something you created or updated you may need a retry loop to find it.

---

2022\-08\-222024\-06\-28

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/search/) to provide us with more information. 

Back to top

[Previous Full reference material](../reference/) [Next Querying overview](queries/) 

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

