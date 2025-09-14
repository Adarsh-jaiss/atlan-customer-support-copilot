# Source URL
https://developer.atlan.com/snippets/common-examples/finding/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/finding/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Contrast traversal and search methods for asset retrieval, highlighting the efficiency of search-based algorithms.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Contrast traversal and search methods for asset retrieval, highlighting the efficiency of search-based algorithms.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/finding/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Finding assets - overview - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/finding/
meta-twitter:card: summary_large_image
meta-twitter:description: Contrast traversal and search methods for asset retrieval, highlighting the efficiency of search-based algorithms.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/finding/index.png
meta-twitter:title: Finding assets - overview - Developer
meta-viewport: width=device-width,initial-scale=1
title: Finding assets - overview - Developer
-->

[Skip to content](#get-all-assets-that) Developer Finding assets \- overview Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Get all assets that...[¶](#get-all-assets-that "Permanent link")
================================================================

One of the most common starting points for an algorithm is to retrieve all assets that meet certain criteria.

To contrast approaches, let's start with an example:

* Imagine you might want to do something with all the columns in a particular schema (irrespective of the table or view they are in).

As a traversal[¶](#as-a-traversal "Permanent link")
---------------------------------------------------

You might logically consider the problem as a traversal:

**Traversal algorithm (pseudocode)**

1\. Retrieve the schema.

**2\. Retrieve all the tables in that schema.**

**a. For each table, retrieve all the columns.**

What you'll get from the table is actually just a reference — the GUID and `qualifiedName` of the column, but no details.

**i. For each column reference, retrieve its details.**

Now do something with the column.

**3\. Retrieve all the views in that schema.**

**a. For each view, retrieve all the columns.**

What you'll get from the table is actually just a reference — the GUID and `qualifiedName` of the column, but no details.

**i. For each column reference, retrieve its details.**

Now do something with the column.

**While logical, this will be resource\-intensive and time\-consuming**

Such an algorithm is certainly logical. However, you need to consider what's really happening behind\-the\-scenes. As the layout of the pseudocode above hopefully illustrates, there are a number of nested loops:

* (2\) and (3\) are loops, and within those loops you are making an API call per asset (table or view) to retrieve other assets. At first glance, this creates an algorithm whose runtime will grow roughly [linearly with the number of tables and views in the schema](https://en.wikipedia.org/wiki/Time_complexity#Linear_time) .
* However, when retrieving the columns through the relationships on a table or view, you only get a *reference* to the column, not the full details of the column. So in reality, you then need to retrieve each column. The linear time complexity is now approaching [quadratic](https://en.wikipedia.org/wiki/Quadratic_time) . This will become *much* slower as volumes grow.

As a search[¶](#as-a-search "Permanent link")
---------------------------------------------

In almost all cases, you can more quickly accomplish your goal by using search. For the example above:

**Search\-based algorithm (pseudocode)**

1\. Run a search.

Using the following conditions:

* Limit assets by [type](../../../search/attributes/common/#assettype_name), to only columns.
* Limit results by [status](../../../search/attributes/common/#assetstatus), to only active (non\-archived) assets.
* Search by [prefix](../../../search/queries/terms/#prefix) using the [`qualifiedName`](../../../search/attributes/common/#assetqualified_name) of the schema.
* Request only the attributes you need to be included in each column result.

**2\. Iterate through the results.**

Now do something with the column.

**Less code (fewer loops), and faster to run**

With this algorithm, you'll only make as many API calls as there are pages of results. (So if you have a page size of 100 and there are 10,000 columns, that's 100 API calls — compared to the other algorithm's 10,000\+ API calls with one per column.)

In general when you want to get many assets, think search first

This was only one example to show the approach. The sections below illustrate a number of them, but you may have many, many others.

Each of these can be accomplished through a search — you just need to define the appropriate criteria! To do that, you might want to read up a bit more on [search in general](../../../search/). It's incredibly powerful, but we know it is not trivial to understand when you're first getting started.

**Top tip**: you can *combine* these examples together to form an even more powerful query, using [compound queries](../../../search/queries/compound/).

---

2022\-10\-122024\-03\-14

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/finding/) to provide us with more information. 

Back to top

[Previous Review accesses of an asset](../../search-logs/) [Next Search for assets](../../advanced-examples/search/) 

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

