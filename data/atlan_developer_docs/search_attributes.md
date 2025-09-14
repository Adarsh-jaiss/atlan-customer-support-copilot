# Source URL
https://developer.atlan.com/search/attributes/

================================================================================

<!--
canonical: https://developer.atlan.com/search/attributes/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/search/attributes/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Searchable fields - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/search/attributes/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/search/attributes/index.png
meta-twitter:title: Searchable fields - Developer
meta-viewport: width=device-width,initial-scale=1
title: Searchable fields - Developer
-->

[Skip to content](#explanation-of-searchable-fields-in-atlan) Developer Searchable fields Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Explanation of searchable fields in Atlan[¶](#explanation-of-searchable-fields-in-atlan "Permanent link")
=========================================================================================================

The [full model reference](../../models/) provides details of every metadata attribute available in Atlan. Alongside each attribute is a listing of the search\-specific fields for that attribute and its type.

Field types[¶](#field-types "Permanent link")
---------------------------------------------

We use the following conventions to delineate the nuances of how different attributes are indexed, and what this means for searching. Note that in the SDKs, every field that exists in Atlan is enumerated. This avoids you needing to remember the exact name of the field (which can vary depending on how it is indexed, even for the same field) or making typos in strings you send in the query.

With the fluent search abstraction, you no longer need to consider how you want to search a particular attribute — the underlying implementation is chosen based on the search predicate you use when writing your query. However, for those curious about the mapping, the following are the different index field that we use in Elastic to handle different kinds of searches.

### Keyword[¶](#keyword "Permanent link")

[Keyword fields](https://www.elastic.co/guide/en/elasticsearch/reference/current/keyword.html)  are used for content that you would usually search using exact values. (In particular, for [term\-level queries](../queries/terms/).)

They are generally *not* used for full\-text search where you would expect your input to provide results that are fuzzy\-matched using synonyms, both plural/singular versions of words, matching any or multiple words in a multi\-word search input, and so on.

In the SDKs, fields that have a keyword index will be one of these types:

* `KeywordField` \- have *only* a keyword index
* `KeywordTextField` — have both a keyword and text index
* `KeywordTextStemmedField` — have a keyword, text, and stemmed text index

### Text[¶](#text "Permanent link")

[Text fields](https://www.elastic.co/guide/en/elasticsearch/reference/current/text.html)  are used for content that you would usually search using [full\-text queries](../queries/text/).

These fields are passed through an analyzer to convert them into an individual list of terms that can be searched. This provides the ability to fuzzy\-match using synonyms, both plural/singular versions of words, matching one or many words in a multi\-word search input, and so on. (Including scoring each result differently based on how many of these aspects it matches compared to other results.)

In the SDKs, fields that have a text index will be one of these types:

* `TextField` — have *only* a text index
* `KeywordTextField` — have both a keyword and text index
* `KeywordTextStemmedField` — have a keyword, text, and stemmed text index

The stemmed text index has been [further analyzed for fuzzy matching](https://www.elastic.co/guide/en/elasticsearch/reference/current/stemming.html)  through full text searches.

### Date[¶](#date "Permanent link")

[Date fields](https://www.elastic.co/guide/en/elasticsearch/reference/current/date.html)  are used for timestamps. We use the numeric *milliseconds\-since\-the\-epoch* representation, so searches should be against such long numbers rather than string\-formatted dates. 

You will most commonly search these using [term\-level queries](../queries/terms/), in particular [range queries](../queries/terms/#range).

In the SDKs, fields that have a date\-based index will be one of these types:

* `NumericField` — have *only* a numeric index
* `NumericRankField` — have both a numeric index and are rank\-boostable

### Boolean[¶](#boolean "Permanent link")

[Boolean fields](https://www.elastic.co/guide/en/elasticsearch/reference/current/boolean.html)  are used for content that can only be either `true` or `false`. You should only try to match these two values when searching on these attributes, using a [term query](../queries/terms/#term).

In the SDKs, fields that have a boolean\-based index will only ever be of the type `BooleanField`.

### Float[¶](#float "Permanent link")

[Float fields](https://www.elastic.co/guide/en/elasticsearch/reference/current/number.html)  are used for content that is numeric and includes decimals.

You will most commonly search these using [term\-level queries](../queries/terms/), in particular [range queries](../queries/terms/#range).

There are non\-obvious nuances to float fields

For example, the values `+0.0` and `-0.0` are considered different values. See the linked Elasticsearch documentation for full details of the nuances.

In the SDKs, fields that have a date\-based index will be one of these types:

* `NumericField` — have *only* a numeric index
* `NumericRankField` — have both a numeric index and are rank\-boostable

### Rank feature[¶](#rank-feature "Permanent link")

[Rank feature fields](https://www.elastic.co/guide/en/elasticsearch/reference/current/rank-feature.html)  are used to boost documents in search results.

You cannot directly query, sort, or aggregate on a rank feature field, but you can use them in [rank feature queries](../queries/rank/) to boost the relevance score of results based on the values of this field.

In the SDKs, fields that have a rank\-boostable index will only ever be of the type `NumericRankField`.

---

2022\-08\-222023\-08\-23

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/search/attributes/) to provide us with more information. 

Back to top

[Previous Compound queries](../queries/compound/) [Next Common search fields](common/) 

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

