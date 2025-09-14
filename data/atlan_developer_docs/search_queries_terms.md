# Source URL
https://developer.atlan.com/search/queries/terms/

================================================================================

<!--
canonical: https://developer.atlan.com/search/queries/terms/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn about term-level queries in Elasticsearch, including term, terms, exists, range, prefix, wildcard, regexp, terms set, and fuzzy queries.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn about term-level queries in Elasticsearch, including term, terms, exists, range, prefix, wildcard, regexp, terms set, and fuzzy queries.
meta-og-image: https://developer.atlan.com/assets/images/social/search/queries/terms.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Term-level queries overview - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/search/queries/terms/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn about term-level queries in Elasticsearch, including term, terms, exists, range, prefix, wildcard, regexp, terms set, and fuzzy queries.
meta-twitter:image: https://developer.atlan.com/assets/images/social/search/queries/terms.png
meta-twitter:title: Term-level queries overview - Developer
meta-viewport: width=device-width,initial-scale=1
title: Term-level queries overview - Developer
-->

[Skip to content](#term-level-queries) Developer Term\-level queries overview Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/search/indexsearch (POST)](../../../endpoints/#tag:apimetasearchindexsearch-post)

Term\-level queries[¶](#term-level-queries "Permanent link")
============================================================

Term\-level queries allow you to find results based on precise values in structured data.[1](#fn:1) For example, by asset type, status, or GUID.

Unlike [full\-text queries](../text/), the search input you use in a term\-level query is *not* analyzed. This means what you search for is matched exactly against what is stored in an attribute — no fuzzy\-matching is applied.[2](#fn:2)

**Details**

Below are the various kinds of term\-level queries. These are sorted with the most commonly used at the top, and cover their usual usage. Each one is linked to Elasticsearch's own documentation to provide greater details. (In most cases there are many more options for each kind of query than what is documented here.)

You will often [combine these queries](../compound/) to create more complex criteria.

Term[¶](#term "Permanent link")
-------------------------------

[1\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

[Term queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-term-query.html)  return results where the asset's value for that attribute matches *exactly* what you're searching.

**What if I want it to be a case insensitive match?**

You can still use term queries for case insensitive matching, too.

* **Java**: add a second parameter of `true` to the predicate method
* **Python**: add a named parameter of `case_insensitive=True` to the predicate method
* **Raw REST API**: send through `"case_insensitive": true` to the API directly

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.NAME.eq("some-name", true)) // (2)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the `NAME` of an `Asset`. Adding the `eq()` predicate creates a term query. You can also optionally send a second parameter as `true` to do a case\-insensitive match.

    Equivalent query through Elastic
    ```
    Query byTerm =  TermQuery.of(t -> t
        .field("name.keyword")
        .value("some-name")
        .caseInsensitive(true))
      ._toQuery();

    ```

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.NAME.eq("some-name", case_insensitive=True))  # (2)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object.
2. Chain a `where()` onto the fluent search object, with the class variable representing a field of the type you want to search to start a query, in this case the `NAME` of an `Asset`. Adding the `eq()` predicate creates a term query. You can also optionally send a named parameter of `case_insensitive=True` to do a case\-insensitive match.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.NAME.eq("some-name", true)) // (2)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the `NAME` of an `Asset`. Adding the `eq()` predicate creates a term query. You can also optionally send a second parameter as `true` to do a case\-insensitive match.

    Equivalent query through Elastic
    ```
    val byTerm = TermQuery.of(t -> t
        .field("name.keyword")
        .value("some-name")
        .caseInsensitive(true))
      ._toQuery()

    ```

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "dsl": { // (1)     "query": { // (2)       "term": { // (3)         "name.keyword": { // (4)           "value": "some-name", // (5)           "case_insensitive": true // (6)         }       }     }   } }  ``` |

1. Queries must be within the `dsl` object in the API...
2. ...and within that the `query` object.
3. For a term query, there needs to be a `term` object embedded within the `query` object.
4. Within this object should be a key with the name of the Elasticsearch field (Atlan attribute) to match against.
5. The value for this field (attribute) to match against should be given through the `value` property.
6. Optionally, you can enable case\-insensitive searching to have an *almost* exact match by setting `case_insensitive` to true.

Terms[¶](#terms "Permanent link")
---------------------------------

[1\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

[Terms queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-terms-query.html)  return results where the asset's value for that attribute matches one or more of the values you're searching *exactly*.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.TYPE_NAME.in(Set.of(Table.TYPE_NAME, Column.TYPE_NAME))) // (2)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the `TYPE_NAME` of an asset. Adding the `in()` predicate creates a terms query.

    Equivalent query through Elastic
    ```
    Query byType = TermsQuery.of(t -> t
        .field("__typeName.keyword")
        .terms(TermsQueryField.of(f -> f
            .value(List.of(FieldValue.of(Table.TYPE_NAME),
                           FieldValue.of(Column.TYPE_NAME))))))
        ._toQuery();

    ```

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.model.assets import Referenceable from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Referenceable.TYPE_NAME.within(["Table", "Column"]))  # (2)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object.
2. Chain a `where()` onto the fluent search object, with the class variable representing a field of the type you want to search to start a query, in this case the `TYPE_NAME` of an asset. Adding the `within()` predicate creates a terms query.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.TYPE_NAME.in(Set.of(Table.TYPE_NAME, Column.TYPE_NAME))) // (2)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the `TYPE_NAME` of an asset. Adding the `in()` predicate creates a terms query.

    Equivalent query through Elastic
    ```
    val byType = TermsQuery.of(t -> t
        .field("__typeName.keyword")
        .terms(TermsQueryField.of(f -> f
            .value(List.of(FieldValue.of(Table.TYPE_NAME),
                           FieldValue.of(Column.TYPE_NAME))))))
        ._toQuery()

    ```

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` {   "dsl": {     "query": {       "terms": { "__typeName.keyword": [ "Table", "Column" ]} // (1)     }   } }  ``` |

1. The general way to construct a terms query, with all flexibility provided by Elasticsearch. This query would find all Table and Column assets, by exactly\-matching either the `Table` or `Column` types.

Exists[¶](#exists "Permanent link")
-----------------------------------

[1\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

[Exists queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-exists-query.html)  return results where the asset contains a value for that attribute. For example, this query would find all assets that have been changed after being created:

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.UPDATED_BY.hasAnyValue()) // (2)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the person who last updated an asset. Adding the `hasAnyValue()` predicate creates an exists query. This will only match results where the field has some value on the asset.

    Equivalent query through Elastic
    ```
    Query byExistence = ExistsQuery.of(q -> q
          .field("__modifiedBy"))
        ._toQuery();

    ```

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.UPDATED_BY.has_any_value())  # (2)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object.
2. Chain a `where()` onto the fluent search object, with the class variable representing a field of the type you want to search to start a query, in this case the person who last updated an asset. Adding the `has_any_value()` predicate creates an exists query. This will only match results where the field has some value on the asset.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.UPDATED_BY.hasAnyValue()) // (2)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the person who last updated an asset. Adding the `hasAnyValue()` predicate creates an exists query. This will only match results where the field has some value on the asset.

    Equivalent query through Elastic
    ```
    val byExistence = ExistsQuery.of(q -> q
          .field("__modifiedBy"))
        ._toQuery()

    ```

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` {   "dsl": {     "query": {       "exists": { "field": "__modifiedBy" }     }   } }  ``` |

Range[¶](#range "Permanent link")
---------------------------------

[1\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

[Range queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-range-query.html)  return results where the asset's value for that attribute is within the range you're searching. (This works for numeric fields only — which for Atlan includes dates, since they are stored as epoch values.) For example, this query would find all assets that were created between January 1, 2022 to February 1, 2022:

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.CREATE_TIME.between(1640995200000L, 1643673600000L)) // (2)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the time an asset was created. Adding the `between()` predicate creates a range query. In this example `between()` allows you to specify two values any matching assets should be between. You could also use:

    * `gt()` for any values strictly greater than a single number
        * `gte()` for any values greater than or equal to a single number
        * `lt()` for values strictly less than a single number
        * `lte()` for values less than or equal to a single number
        * `eq()` for valuess strictly equal to a single number
    Equivalent query through Elastic
    ```
    Query byRange = RangeQuery.of(r -> r
        .field("__timestamp")
        .gte(JsonData.of(1640995200000L))
        .lt(JsonData.of(1643673600000L)))
      ._toQuery();

    ```

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.CREATE_TIME.between(1640995200000, 1643673600000))  # (2)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object.
2. Chain a `where()` onto the fluent search object, with the class variable representing a field of the type you want to search to start a query, in this case the time an asset was created. Adding the `between()` predicate creates a range query. In this example `between()` allows you to specify two values any matching assets should be between. You could also use:

    * `gt()` for any values strictly greater than a single number
        * `gte()` for any values greater than or equal to a single number
        * `lt()` for values strictly less than a single number
        * `lte()` for values less than or equal to a single number
        * `eq()` for valuess strictly equal to a single number

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.CREATE_TIME.between(1640995200000L, 1643673600000L)) // (2)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the time an asset was created. Adding the `between()` predicate creates a range query. In this example `between()` allows you to specify two values any matching assets should be between. You could also use:

    * `gt()` for any values strictly greater than a single number
        * `gte()` for any values greater than or equal to a single number
        * `lt()` for values strictly less than a single number
        * `lte()` for values less than or equal to a single number
        * `eq()` for valuess strictly equal to a single number
    Equivalent query through Elastic
    ```
    val byRange = RangeQuery.of(r -> r
        .field("__timestamp")
        .gte(JsonData.of(1640995200000L))
        .lt(JsonData.of(1643673600000L)))
      ._toQuery()

    ```

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "dsl": {     "query": {       "range": {         "__timestamp": {           "gte": 1640995200000,           "lt": 1643673600000 // (1)         }       }     }   } }  ``` |

1. You do not need to specify both ends of the range, you could use only a single condition.

Prefix[¶](#prefix "Permanent link")
-----------------------------------

[1\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

[Prefix queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-prefix-query.html)  return results where the asset's value for that attribute starts with what you're searching. For example, this query would find all columns whose `qualifiedName` starts with `default/snowflake/1662194632` (in other words, all columns in any table, view, materialized view, schema or database in that connection):

**What if I want it to be a case insensitive match?**

You can still use term queries for case insensitive matching, too.

* **Java**: add a second parameter of `true` to the predicate method
* **Python**: add a named parameter of `case_insensitive=True` to the predicate method
* **Raw REST API**: send through `"case_insensitive": true` to the API directly

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.QUALIFIED_NAME.startsWith("default/snowflake/1662194632", true)) // (2)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the `QUALIFIED_NAME` of an `Asset`. Adding the `startsWith()` predicate creates a prefix query. This will only match results where the field's value starts with the provided string. You can also optionally send a second parameter as `true` to do a case\-insensitive match.

    Equivalent query through Elastic
    ```
    Query byPrefix = PrefixQuery.of(p -> p
        .field("qualifiedName")
        .value("default/snowflake/1662194632"))
      ._toQuery();

    ```

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.QUALIFIED_NAME.startswith("default/snowflake/1662194632", case_insensitive=True))  # (2)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object.
2. Chain a `where()` onto the fluent search object, with the class variable representing a field of the type you want to search to start a query, in this case the `QUALIFIED_NAME` of an `Asset`. Adding the `startswith()` predicate creates a prefix query. This will only match results where the field's value starts with the provided string. You can also optionally send a named parameter of `case_insensitive=True` to do a case\-insensitive match.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.QUALIFIED_NAME.startsWith("default/snowflake/1662194632", true)) // (2)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the `QUALIFIED_NAME` of an `Asset`. Adding the `startsWith()` predicate creates a prefix query. This will only match results where the field's value starts with the provided string. You can also optionally send a second parameter as `true` to do a case\-insensitive match.

    Equivalent query through Elastic
    ```
    val byPrefix = PrefixQuery.of(p -> p
        .field("qualifiedName")
        .value("default/snowflake/1662194632"))
      ._toQuery()

    ```

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` {   "dsl": {     "query": {       "prefix": { "qualifiedName": "default/snowflake/1662194632" }     }   } }  ``` |

Wildcard[¶](#wildcard "Permanent link")
---------------------------------------

[1\.9\.1](https://github.com/atlanhq/atlan-python/releases/tag/1.9.1 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

[Wildcard queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-wildcard-query.html)  return results where the asset's value for that attribute matches the wildcard pattern you're searching. This can be useful for searching based on simple naming conventions. For example, this query would find all assets whose name starts with `C_` and ends with `_SK` with any characters in\-between:

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.NAME.wildcard("C_*_SK", true)) // (2)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the `NAME` of an `Asset`. Adding the `wildcard()` predicate creates a wildcard query. This will only match results where the field's name starts with `C_` and ends with `_SK`. You can also optionally send a second parameter as `true` to do a case\-insensitive match.

    Equivalent query through Elastic
    ```
    Query byWildcard = WildcardQuery.of(w -> w
      .field("name.keyword")
      .value("C_*_SK"))
    ._toQuery();

    ```

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch() # (1)         .where(Asset.NAME.wildcard("C_*_SK", case_insensitive=True)) # (2)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object.
2. Chain a `where()` onto the select, with the static constant representing
a field of the type you want to search to start a query, in this case the `NAME` of an `Asset`. Adding the `wildcard()` predicate creates a wildcard query. This will
only match results where the field's name starts with `C_` and ends with `_SK`.
You can also optionally send a named parameter of `case_insensitive=True` to do a case\-insensitive match.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.NAME.wildcard("C_*_SK", true)) // (2)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the `NAME` of an `Asset`. Adding the `wildcard()` predicate creates a wildcard query. This will only match results where the field's name starts with `C_` and ends with `_SK`. You can also optionally send a second parameter as `true` to do a case\-insensitive match.

    Equivalent query through Elastic
    ```
    val byWildcard = WildcardQuery.of(w -> w
      .field("name.keyword")
      .value("C_*_SK"))
    ._toQuery()

    ```

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` {   "dsl": {     "query": {       "wildcard": { "name.keyword": { "value": "C_*_SK" }}     }   } }  ``` |

Avoid starting the search pattern with a wildcard

Using this to do an *ends\-with* style search (such as `*_SK`) can be very slow.

Regexp[¶](#regexp "Permanent link")
-----------------------------------

[1\.9\.1](https://github.com/atlanhq/atlan-python/releases/tag/1.9.1 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

[Regexp queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-regexp-query.html)  return results where the asset's value for that attribute matches the [regular expression](https://www.elastic.co/guide/en/elasticsearch/reference/current/regexp-syntax.html)  you're searching. This can be useful for searching based on more complicated naming conventions. For example, this query would find all assets whose name starts with `C_` and ends with `_SK` with the characters `ADDR` somewhere in\-between:

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.NAME.regex("C_[A-Za-z0-9_]*ADDR[A-Za-z0-9_]*_SK", true)) // (2)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the `NAME` of an `Asset`. Adding the `regex()` predicate creates a regexp query. This will only match results where the field's value starts with `C_`, ends with `_SK`, and in\-between has any alphanumeric characters and `ADDR`. You can also optionally send a second parameter as `true` to do a case\-insensitive match.

    Equivalent query through Elastic
    ```
    Query byRegex = RegexpQuery.of(r -> r
      .field("name.keyword")
      .value("C_[A-Za-z0-9_]*ADDR[A-Za-z0-9_]*_SK"))
    ._toQuery();

    ```

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch() # (1)         .where(Asset.NAME.regexp("C_[A-Za-z0-9_]*ADDR[A-Za-z0-9_]*_SK", case_insensitive=True)) # (2)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object.
2. Chain a `where()` onto the select, with the static constant representing
a field of the type you want to search to start a query, in this case the `NAME` of an `Asset`. Adding the `regexp()` predicate creates a regexp query. This will
only match results where the field's value starts with `C_`, ends with `_SK`, and
in\-between has any alphanumeric characters and `ADDR`. You can also optionally send
a named parameter of `case_insensitive=True` to do a case\-insensitive match.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.NAME.regex("C_[A-Za-z0-9_]*ADDR[A-Za-z0-9_]*_SK", true)) // (2)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the `NAME` of an `Asset`. Adding the `regex()` predicate creates a regexp query. This will only match results where the field's value starts with `C_`, ends with `_SK`, and in\-between has any alphanumeric characters and `ADDR`. You can also optionally send a second parameter as `true` to do a case\-insensitive match.

    Equivalent query through Elastic
    ```
    val byRegex = RegexpQuery.of(r -> r
      .field("name.keyword")
      .value("C_[A-Za-z0-9_]*ADDR[A-Za-z0-9_]*_SK"))
    ._toQuery()

    ```

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` {   "dsl": {     "query": {       "regexp": {         "name.keyword": {           "value": "C_[A-Za-z0-9_]*ADDR[A-Za-z0-9_]*_SK"         }       }     }   } }  ``` |

Performance can vary widely depending on the regular expression

To achieve the best performance, avoid using wildcard patterns such as `.*` or `.*?+` without any prefix or suffix.

Terms set[¶](#terms-set "Permanent link")
-----------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

[Terms set queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-terms-set-query.html)  return results where the asset's values for that attribute matches a minimum number of the values you're searching for *exactly*. For example, this query would find all assets with at least two of the three specified Atlan tags:

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.ATLAN_TAGS.in(List.of( // (2)             client.getAtlanTagCache().getIdForName("PII"),             client.getAtlanTagCache().getIdForName("SPI"),             client.getAtlanTagCache().getIdForName("Restricted"))),         2) // (3)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the `ATLAN_TAGS` of an `Asset`. Adding the `in()` predicate creates a terms query. This will only match results where the field's values exactly overlap with some number of values in the provided list.
3. You therefore also need to specify how many values (minimally) must be present and overlapping in the field to be considered a match.

    Equivalent query through Elastic
    ```
    Query byTerms = TermsSetQuery.of(t -> t
      .field("__traitNames")
      .terms(List.of(AtlanTagCache.getIdForName("PII"),
                     AtlanTagCache.getIdForName("SPI"),
                     AtlanTagCache.getIdForName("Restricted")))
      .minimumShouldMatchScript(Script.of(s -> s
          .inline(InlineScript.of(i -> i
              .source("params.get('minimum');")
                  .params(Map.of("minimum", JsonData.of(2))))))))
    ._toQuery();

    ```

Coming soon

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.ATLAN_TAGS.in(List.of( // (2)             client.getAtlanTagCache().getIdForName("PII"),             client.getAtlanTagCache().getIdForName("SPI"),             client.getAtlanTagCache().getIdForName("Restricted"))),         2) // (3)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the `ATLAN_TAGS` of an `Asset`. Adding the `in()` predicate creates a terms query. This will only match results where the field's values exactly overlap with some number of values in the provided list.
3. You therefore also need to specify how many values (minimally) must be present and overlapping in the field to be considered a match.

    Equivalent query through Elastic
    ```
    val byTerms = TermsSetQuery.of(t -> t
      .field("__traitNames")
      .terms(List.of(AtlanTagCache.getIdForName("PII"),
                     AtlanTagCache.getIdForName("SPI"),
                     AtlanTagCache.getIdForName("Restricted")))
      .minimumShouldMatchScript(Script.of(s -> s
          .inline(InlineScript.of(i -> i
              .source("params.get('minimum');")
                  .params(Map.of("minimum", JsonData.of(2))))))))
    ._toQuery()

    ```

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` {   "dsl": {     "query": {       "terms_set": {         "__traitNames": {           "terms": [ "EO7Gp8Y6xeI1JHctrlpQhB", "J5q2QzErHG4unHTA0C5GE0", "VwN5VzRHlHVIWB4cbaxM5R" ], // (1)           "minimum_should_match_script": {             "source": "params.get('minimum');",             "params": {               "minimum": 2             }           }         }       }     }   } }  ``` |

1. In the JSON request, we need to use Atlan's internal hashed string representation of a Atlan tag name. The SDKs can translate to this for us.

Fuzzy[¶](#fuzzy "Permanent link")
---------------------------------

[Fuzzy queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-fuzzy-query.html)  return results where the asset's value for that attribute is *similar* to the value you're searching. This is determined by [Levenshtein edit distance](https://en.wikipedia.org/wiki/Levenshtein_distance)  (the number of one\-character changes needed to match what you're searching).

Are you sure this is what you want?

This is a very simplistic fuzzy\-matching algorithm, and it may end up matching both more and less than you want it to. For more advanced fuzzy\-matching, you probably want to use [full\-text queries](../text/). Since this is possible through Atlan's search, it is included here for completeness.

[1\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.0.0 "Minimum version")[1\.1\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.1.0 "Minimum version")

For example, this query would find all assets whose name is 1\-edit away (so would match `block`, `clock`, `lock`, `black`, etc):

Java

Python

Kotlin

Raw REST API

| Build the query | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` Query byLevenshtein = FuzzyQuery.of(f -> f     .field("name.keyword")     .value("block"))     .fuzziness("1")   ._toQuery();  ``` |

| Build the request | |
| --- | --- |
| ``` 6 7 8 ``` | ``` IndexSearchRequest index = IndexSearchRequest     .builder(byLevenshtein)     .build();  ``` |

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.search import DSL, Fuzzy, IndexSearchRequest  client = AtlanClient()  index = IndexSearchRequest(     dsl=DSL(query=Fuzzy(field="name.keyword", value="block", fuzziness="1")) )  response = client.asset.search(index)  ``` |

| Build the query | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val byLevenshtein = FuzzyQuery.of(f -> f     .field("name.keyword")     .value("block"))     .fuzziness("1")   ._toQuery()  ``` |

| Build the request | |
| --- | --- |
| ``` 6 7 8 ``` | ``` val index = IndexSearchRequest     .builder(byLevenshtein)     .build()  ``` |

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "dsl": {     "query": {       "fuzzy": {         "name.keyword": {           "value": "block",           "fuzziness": "1"         }       }     }   } }  ``` |

---

1. This page is a summary of the details in the Elasticsearch Guide's [Term\-level queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/term-level-queries.html)  [↩](#fnref:1 "Jump back to footnote 1 in the text")
2. Ok, that's not *strictly* true, since as you'll see there are some term\-level queries that give very basic fuzziness. And actually, a [normalizer](https://www.elastic.co/guide/en/elasticsearch/reference/current/normalizer.html)  can be applied as well, to make these searches case\-insensitive. But the *intent* of term\-level queries is to do exact matches with minimal fuzziness.[↩](#fnref:2 "Jump back to footnote 2 in the text")

---

2022\-09\-082025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/search/queries/terms/) to provide us with more information. 

Back to top

[Previous Querying overview](../) [Next Full text queries](../text/) 

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

