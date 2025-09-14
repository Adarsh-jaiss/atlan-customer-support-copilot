# Source URL
https://developer.atlan.com/getting-started/

================================================================================

<!--
canonical: https://developer.atlan.com/getting-started/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Not sure where to start? Allow us to introduce Atlan development through example.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Not sure where to start? Allow us to introduce Atlan development through example.
meta-og-image: https://developer.atlan.com/assets/images/social/getting-started/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Introductory walkthrough - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/getting-started/
meta-twitter:card: summary_large_image
meta-twitter:description: Not sure where to start? Allow us to introduce Atlan development through example.
meta-twitter:image: https://developer.atlan.com/assets/images/social/getting-started/index.png
meta-twitter:title: Introductory walkthrough - Developer
meta-viewport: width=device-width,initial-scale=1
title: Introductory walkthrough - Developer
-->

[Skip to content](#an-introductory-walkthrough) Developer Introductory walkthrough Initializing search 

* 
* [Overview](..)
* [Getting started](./)
* [Common tasks](../snippets/)
* [Asset\-specific](../patterns/)
* [Governance structures](../governance/)
* [Reference](../reference/)

An introductory walkthrough[¶](#an-introductory-walkthrough "Permanent link")
=============================================================================

Atlan University

You might also like our [Atlan Platform Essentials certification](https://university.atlan.com/certifications/f4d88500-a7a7-11ed-80f9-06c0361096e5).

Not sure where to start? Allow us to introduce Atlan development through example.[1](#fn:1)

Setting up[¶](#setting-up "Permanent link")
-------------------------------------------

We strongly recommend using one of our SDKs to simplify the development process. As a first step, set one up:

Java

Python

Kotlin

Go

The SDK is available on  [Maven Central](https://central.sonatype.com/artifact/com.atlan/atlan-java), ready to be included in your project:

build.gradle.kts
```
repositories {
    mavenCentral()
}

dependencies {
  implementation("com.atlan:atlan-java:+") // (1)
  testRuntimeOnly("ch.qos.logback:logback-classic:1.2.11") // (2)
}

```
1. Include the latest version of the Java SDK in your project as a dependency. You can also give a specific version instead of the `+`, if you'd like.
2. The Java SDK uses slf4j for logging purposes. You can include logback as a simple binding mechanism to send any logging information out to your console (standard out).

Provide two values to create an Atlan client:

| AtlanLiveTest.java | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` import com.atlan.AtlanClient;  public class AtlanLiveTest {     public static void main(String[] args) {         try (AtlanClient client = new AtlanClient(             "https://tenant.atlan.com",  // (1)             "...") // (2)         ) {             // (3)         }     } }  ``` |

1. Provide your Atlan tenant URL as the first parameter. You can also read the value from an environment variable, if you leave out both parameters.
2. Provide your [API token](https://ask.atlan.com/hc/en-us/articles/8312649180049)  as the second parameter. You can also read the value from another environment variable, by leaving out this parameter.
3. You can then start writing some actual code to run within a static `main` method. (We'll show some examples of this further below.) Once the block is complete, any resources held by the client (i.e. for caching) will be automatically released.

Set up logging for SDK

You can also checkout to the [advanced configuration section](../sdks/java/#logging) of the SDK to learn about how to set up logging.

The SDK is available on  [PyPI](https://pypi.org/project/pyatlan/). You can use pip to install it as follows:

Install the SDK
```
pip install pyatlan

```
Provide two values to create an Atlan client:

| atlan\_live\_test.py | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient(     base_url="https://tenant.atlan.com",  # (1)     api_key="..."  # (2) )  ``` |

1. Provide your Atlan tenant URL to the `base_url` parameter. (You can also [do this through environment variables](../sdks/python/#using-environment-variables).)
2. Provide your [API token](https://ask.atlan.com/hc/en-us/articles/8312649180049)  to the `api_key` parameter. (You can also [do this through environment variables](../sdks/python/#using-environment-variables).)

Set up logging for SDK

You can also checkout to the [advanced configuration section](../sdks/python/#logging) of the SDK to learn about how to set up logging.

The SDK is available on  [Maven Central](https://central.sonatype.com/artifact/com.atlan/atlan-java), ready to be included in your project:

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

Provide two values to create an Atlan client:

| AtlanLiveTest.kt | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` import com.atlan.AtlanClient;  fun main() {     AtlanClient(         "https://tenant.atlan.com", // (1)         "..." // (2)     ).use { client ->         // (3)     } }  ``` |

1. Provide your Atlan tenant URL as the first parameter. You can also read the value from an environment variable, if you leave out both parameters.
2. Provide your [API token](https://ask.atlan.com/hc/en-us/articles/8312649180049)  as the second parameter. You can also read the value from another environment variable, by leaving out this parameter.
3. You can then start writing some actual code to run within a static `main` method. (We'll show some examples of this further below.) Once the block is complete, any resources held by the client (i.e. for caching) will be automatically released.

Set up logging for SDK

You can also checkout to the [advanced configuration section](../sdks/kotlin/#logging) of the SDK to learn about how to set up logging.

The SDK is available on  [GitHub](https://github.com/atlanhq/atlan-go), ready to be included in your project:

| main.go | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` package main  import (     "github.com/atlanhq/atlan-go/atlan/assets" )  ``` |

Provide two values to set up connectivity to Atlan:

| main.go | |
| --- | --- |
| ```  6  7  8  9 10 11 ``` | ``` func main() {   ctx, _ := assets.Context(     "https://tenant.atlan.com", // (1)     "..." // (2)   ) }  ``` |

1. Provide your Atlan tenant URL to the `assets.Context()` method. If you prefer using the value from an environment variable, you can use `assets.NewContext()` without any parameters.
2. Provide your [API token](https://ask.atlan.com/hc/en-us/articles/8312649180049)  as the second parameter to the `assets.Context()` method. (Or again, have it picked up automatically by the `assets.NewContext()` method.)

Set up logging for SDK

You can also checkout to the [advanced configuration section](../sdks/go/#logging) of the SDK to learn about how to set up logging.

Don't forget to give permissions

If you want to be able to access existing metadata with an API token, don't forget that you need to [assign one or more personas](https://ask.atlan.com/hc/en-us/articles/8312649180049#token-permissions-0-2)  to the [API token](https://ask.atlan.com/hc/en-us/articles/8312649180049)  that grant it access to metadata.

---

Retrieving metadata[¶](#retrieving-metadata "Permanent link")
-------------------------------------------------------------

Now that you have an SDK installed and configured, you are ready to code! 

### What is an asset?[¶](#what-is-an-asset "Permanent link")

In Atlan, we refer to all objects that provide context to your data as **assets**.

```
classDiagram
  class Table {
    certificateStatus
    announcementType
    columnCount
    rowCount
    ...
    atlanSchema()
    columns()
  }
  class Column {
    certificateStatus
    announcementType
    dataType
    isNullable
    ...
    table()
  }
  Table *-- Column
```
Each type of asset in Atlan has a set of:

* *Properties*, such as:

    + Certificates
    + Announcements
* *Relationships* to other assets, such as:

    + Schema  child tables
    + Table  parent schema
    + Table  child columns
    + Column  parent table

**Assets are *instances* of metadata.**

In an object\-oriented programming sense, think of an asset as an ***instance*** of a class. The structure of an asset (the class itself, in this analogy) is defined by something called a **type definition**, but that's for another day.

So as you can see:

* There are many different kinds of assets: tables, columns, schemas, databases, business intelligence dashboards, reports, and so on.
* Assets inter\-relate with each other: a table has a parent schema and child columns, a schema has a parent database and child tables, and so on.
* Different kinds of assets have some common properties (like certificates) and other properties that are unique to that kind of asset (like a columnCount that only exists on tables, not on schemas or databases).

### When you know the asset[¶](#when-you-know-the-asset "Permanent link")

When you already know which asset you want to retrieve, you can [read it from Atlan using one of its *identifiers*](../snippets/advanced-examples/read/). We'll discuss these in more detail as part of updates, but for now you can think of them as:

#### `guid`[¶](#guid "Permanent link")

is a primary key for an asset: completely unique, but meaningless by itself

#### `qualifiedName`[¶](#qualifiedname "Permanent link")

is a business key for an asset: unique for a given kind of asset, and interpretable

Java

Python

Kotlin

Go

| Retrieve an asset (AtlanLiveTest.java) | |
| --- | --- |
| ``` 5 6 7 8 ``` | ``` try (AtlanClient client = new AtlanClient()) {     Table table = Table.get(client, "b4113341-251b-4adc-81fb-2420501c30e6"); // (1)     table = Table.get(client, "default/snowflake/1234567890/MY_DB/MY_SCHEMA/MY_TABLE"); }  ``` |

1. You can retrieve an asset using the static `get()` method on any asset type, providing the client and either the asset's GUID or `qualifiedName`. (Each asset type is its own unique class in the SDK.)

| Retrieve an asset (atlan\_live\_test.py) | |
| --- | --- |
| ```  7  8  9 10 11 12 13 14 ``` | ``` table = client.asset.get_by_guid(  # (1)     asset_type=Table,     guid="b4113341-251b-4adc-81fb-2420501c30e6" ) table = client.asset.get_by_qualified_name(     asset_type=Table,     qualified_name="default/snowflake/1234567890/MY_DB/MY_SCHEMA/MY_TABLE" )  ``` |

1. You can retrieve an asset using the `asset.get_by_guid()` method on the Atlan client, providing both the type of asset you expect to retrieve and its GUID. (Each asset type is its own unique class in the SDK.)
2. You can also retrieve an asset using the `asset.get_by_qualified_name()` method on the Atlan client, providing the type of asset you expect to retrieve and its `qualified_name`. (Each asset type is its own unique class in the SDK.)

| Retrieve an asset (AtlanLiveTest.kt) | |
| --- | --- |
| ``` 4 5 6 7 ``` | ``` AtlanClient().use { client ->     var table = Table.get(client, "b4113341-251b-4adc-81fb-2420501c30e6") // (1)     table = Table.get(client, "default/snowflake/1234567890/MY_DB/MY_SCHEMA/MY_TABLE") }  ``` |

1. You can retrieve an asset using the static `get()` method on any asset type, providing the client and either the asset's GUID or `qualifiedName`. (Each asset type is its own unique class in the SDK.)

| Request an asset (main.go) | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` response, err := assets.GetByGuid[*assets.Table]( // (1)     "b4113341-251b-4adc-81fb-2420501c30e6" ) response, err := assets.GetByQualifiedName[*assets.Table]( // (2)     "default/snowflake/1234567890/MY_DB/MY_SCHEMA/MY_TABLE" )  ``` |

1. You can retrieve an asset using the `assets.GetByGuid()` method on the Atlan client, providing both the type of asset you expect to retrieve and its GUID. (Each asset type is its own unique class in the SDK.)
2. You can also retrieve an asset using the `assets.GetByQualifiedName()` method on the Atlan client, providing the type of asset you expect to retrieve and its `qualifiedName`. (Each asset type is its own unique class in the SDK.)

Note that the response is strongly typed:

* If you are retrieving a table, you will get a table back (as long as it exists).
* You do not need to figure out what properties or relationships exist on a table \- the `Table` class defines them for for you already.

In any modern IDE, this means you have type\-ahead support for retrieving the properties and relationships from the `table` variable. You can also refer to the [types reference](../models/) in this portal for full details of every kind of asset.

Retrieval by identifier can be more costly than you might expect

Even though you are retrieving an asset by an identifier, this can be more costly than you might expect. Retrieving an asset in this way will:

* Retrieve all its properties and their values
* Retrieve all its relationships

Imagine the asset you are retrieving has 100's or 1000's of these. If you only care about its certificate and any owners, you will be retrieving far more information than you need.

### When you need to find it first[¶](#when-you-need-to-find-it-first "Permanent link")

What if you don't know the asset's identifier? Or what if you want to retrieve many assets with some common set of characteristics? In that case, you can [*search* for the asset(s)](../snippets/advanced-examples/search/).

For example, imagine you want to find all tables named `MY_TABLE`:

Java

Python

Kotlin

Go

| Search for an asset (AtlanLiveTest.java) | |
| --- | --- |
| ```  5  6  7  8  9 10 ``` | ``` try (AtlanClient client = new AtlanClient()) {     List<Asset> tables = Table.select(client) // (1)         .where(Table.NAME.eq("MY_TABLE")) // (2)         .stream() // (3)         .toList(); }  ``` |

1. You can search all active assets of a given type using the `select()` static method.
2. Chain onto this method any conditions you want to apply to the search, in this example a `where` clause that will match any table whose name equals `MY_TABLE`.
3. You can then stream the results from this search and process them as any standard Java stream: filter them, limit them, apply an action to each one, and so on. The results of the search are automatically paged and each page is lazily\-fetched.

| Search for an asset (atlan\_live\_test.py) | |
| --- | --- |
| ```  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` from pyatlan.model.fluent_search import FluentSearch from pyatlan.model.assets import Table  request = (     FluentSearch()  # (1)     .where(FluentSearch.asset_type(Table))     .where(FluentSearch.active_assets())     .where(Table.NAME.eq("MY_TABLE"))  # (2) ).to_request()  # (3) tables = [] for result in client.asset.search(request):  # (4)     tables.append(result)  ``` |

1. You can search all active assets of a given type by creating a `FluentSearch()` object and chaining two `where` clauses:

    * `FluentSearch.asset_type` to limit to a particular kind of asset
        * `FluentSearch.active_assets()` to limit to only active assets of that kind
2. Chain onto this method any conditions you want to apply to the search, in this example a `where` clause that will match any table whose name equals `MY_TABLE`.
3. You can then convert this object into a search request using the `to_request()` method.
4. Run the request using the `asset.search()` method on the Atlan client, and you can directly iterate through the search results. The results of the search are automatically paged and each page is lazily\-fetched.

| Search for an asset (AtlanLiveTest.kt) | |
| --- | --- |
| ``` 4 5 6 7 8 9 ``` | ``` AtlanClient().use { client ->     val tables = Table.select(client) // (1)         .where(Table.NAME.eq("MY_TABLE")) // (2)         .stream() // (3)         .toList() }  ``` |

1. You can search all active assets of a given type using the `select()` static method.
2. Chain onto this method any conditions you want to apply to the search, in this example a `where` clause that will match any table whose name equals `MY_TABLE`.
3. You can then stream the results from this search and process them as any standard Kotlin stream: filter them, limit them, apply an action to each one, and so on. The results of the search are automatically paged and each page is lazily\-fetched.

| Search for an asset (main.go) | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 ``` | ``` searchResponse, err := assets.NewFluentSearch(). // (1)     ActiveAssets().     PageSizes(300).     Where(ctx.Table.NAME.Eq("MY_TABLE")). // (2)     Execute() // (3)  entities, errIter := searchResponse.Iter() // (4)  for asset := range entities {     fmt.Println("Asset name:", *asset.Name) }  if err := <-errIter; err != nil {     fmt.Println("Error during iteration:", err) }  ``` |

1. You can search all active assets of a given type using the `NewFluentSearch()` method.
2. Chain onto this method any conditions you want to apply to the search, in this example a `Where` clause that will match any table whose name equals `MY_TABLE`.
3. You can then run the request using `Execute()`.
4. You can directly iterate through the search results. The SDK handles pagination for you, fetching each page lazily as needed.

By default, the search only returns minimal information about each asset (only its identifiers). However, you can also specify what information you want.

For example, if you want to know the certificate of the asset you only need to tack that onto the query:

Java

Python

Kotlin

Go

| Search for an asset (AtlanLiveTest.java) | |
| --- | --- |
| ```  5  6  7  8  9 10 11 ``` | ``` try (AtlanClient client = new AtlanClient()) {     List<Asset> tables = Table.select(client)         .where(Table.NAME.eq("MY_TABLE"))         .includeOnResults(Table.CERTIFICATE_STATUS) // (1)         .stream()         .toList(); }  ``` |

1. Only this line differs from the original query. You can chain as many `includeOnResults` calls as you want to specify the properties and relationships you want to retrieve for matching assets.

| Search for an asset (atlan\_live\_test.py) | |
| --- | --- |
| ```  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` from pyatlan.model.fluent_search import FluentSearch from pyatlan.model.assets import Table  request = (     FluentSearch()     .where(FluentSearch.asset_type(Table))     .where(FluentSearch.active_assets())     .where(Table.NAME.eq("MY_TABLE"))     .include_on_results(Table.CERTIFICATE_STATUS)  # (1) ).to_request() tables = [] for result in client.asset.search(request):     tables.append(result)  ``` |

1. Only this line differs from the original query. You can chain as many `include_on_results` calls as you want to specify the properties and relationships you want to retrieve for matching assets.

| Search for an asset (AtlanLiveTest.kt) | |
| --- | --- |
| ```  4  5  6  7  8  9 10 ``` | ``` AtlanClient().use { client ->     val tables = Table.select(client)         .where(Table.NAME.eq("MY_TABLE"))         .includeOnResults(Table.CERTIFICATE_STATUS) // (1)         .stream()         .toList() }  ``` |

1. Only this line differs from the original query. You can chain as many `includeOnResults` calls as you want to specify the properties and relationships you want to retrieve for matching assets.

| Search for an asset (main.go) | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 ``` | ``` searchResponse, err := assets.NewFluentSearch().     ActiveAssets().     PageSizes(300).     Where(ctx.Table.NAME.Eq("MY_TABLE")).     IncludeOnResults(assets.CERTIFICATE_STATUS). // (1)     Execute()  entities, errIter := searchResponse.Iter()  for asset := range entities {     fmt.Println("Asset name:", *asset.Name) }  if err := <-errIter; err != nil {     fmt.Println("Error during iteration:", err) }  ``` |

1. Only this line differs from the original query. You can include as many attributes in `IncludeOnResults` as you want to specify the properties and relationships you want to retrieve for matching assets.

Also gives the best performance

Searching not only allows you to find an asset without knowing its identifier, it also improves retrieval performance. You no longer retrieve information you don't need — you can specify precisely the properties and relationships you want.

---

Updating metadata[¶](#updating-metadata "Permanent link")
---------------------------------------------------------

If all you want to do is check or report on metadata, you should have a starting point from the information above.

Or, now that you've found an asset of interest, maybe you want to [*update* the asset with additional metadata](../snippets/advanced-examples/update/)?

Once again, before we jump to code, let's first understand some key concepts about how Atlan handles updates:

### Importance of identifiers[¶](#importance-of-identifiers "Permanent link")

Most operations on assets are *upserts*, that is, they could either create (insert) or update a given asset.

How do you know which is going to happen?

To answer this question, you need to understand how Atlan uniquely identifies each asset.

Recall [earlier we discussed asset's different identifiers in Atlan](#when-you-know-the-asset). Every asset in Atlan has *at least* the following two unique identifiers. These are both mandatory for every asset, so no asset can exist without these:

#### GUID[¶](#guid_1 "Permanent link")

Atlan uses globally\-unique identifiers (GUIDs) to uniquely identify each asset, *globally*. They look something like this:

`17f0356e-75f6-4e0b-8b05-32cebe8cd953`

As the name implies, GUIDs are:

- [x] Globally unique (across all systems).

They are:

- [x] ***Generated*** in a way that makes it nearly impossible for anything else to ever generate that same ID.[2](#fn:2)

Note that this means the GUID itself is *not*:

- [ ] Meaningful or capable of being interpreted in any way

#### qualifiedName[¶](#qualifiedname_1 "Permanent link")

Atlan uses `qualifiedName`s to uniquely identify assets based on their characteristics. They look something like this:

`default/snowflake/1234567890/DB/SCHEMA`

Qualified names are *not*:

- [ ] Globally unique (across all systems).

Instead, they are:

- [x] Consistently ***constructed*** in a meaningful way, making it possible for them to be reconstructed.

Note that this means the `qualifiedName` is:

- [x] Meaningful and capable of being interpreted

How these impact updates

Since they are truly unique, operations that include a GUID will only *update* an asset, not create one. Conversely, operations that take a `qualifiedName` can:

* **Create** an asset, if no ***exactly\-matching*** `qualifiedName` is found in Atlan.
* **Update** an asset, if an exact\-match for the `qualifiedName` is found in Atlan.

These operations also require a `typeName`, so that if creation does occur the correct type of asset is created.

Unintended consequences of this behavior

Be careful when using operations with only the `qualifiedName`. You may end up creating assets when you were only expecting them to be updated or to fail if they did not already exist. This is particularly true when you do not give the *exact, case\-sensitive* `qualifiedName` of an asset. `a/b/c/d` is *not* the same as `a/B/c/d` when it comes to `qualifiedName`s.

Perhaps this leaves you wondering: why have a `qualifiedName` at all?

The `qualifiedName`'s purpose is to identify what is a unique asset. Many different tools might all have information about that asset. Having a common "identity" means that many different systems can each *independently* construct its identifier the same way.

* If a crawler gets table details from Snowflake it can upsert based on those identity characteristics in Atlan. The crawler will not create duplicate tables every time it runs. This gives idempotency.
* Looker knows the same identity characteristics for the Snowflake tables and columns. So if you get details from Looker about the tables it uses for reporting, you can link them together in lineage. (Looker can construct the same identifier for the table as Snowflake itself.)

These characteristics are ***not*** possible using GUIDs alone.

### Limit to changes only[¶](#limit-to-changes-only "Permanent link")

Now that you understand the nuances of identifiers, let's look at how you can update metadata in Atlan.

In general, you only need to send changes to Atlan. You do *not* need to send an entire asset each time you want to make changes to it. For example, imagine you want to mark a table as certified but do not want to change anything else (its name, description, owner details, and so on):

Java

Python

Kotlin

Go

| Update an asset (AtlanLiveTest.java) | |
| --- | --- |
| ```  5  6  7  8  9 10 11 12 ``` | ``` try (AtlanClient client = new AtlanClient()) {     Table toUpdate = Table.updater( // (1)             "default/snowflake/1234567890/MY_DB/MY_SCHEMA/MY_TABLE",             "MY_TABLE")         .certificateStatus(CertificateStatus.VERIFIED) // (2)         .build(); // (3)     AssetMutationResponse response = toUpdate.save(client); // (4) }  ``` |

1. You can update an asset *without* first looking the asset up, if you know (can construct) its identifying `qualifiedName`. Using the `updater()` static method on any asset type, you pass in (typically) the `qualifiedName` and name of the asset. This returns a builder onto which you can then chain any updates.
2. You can then chain onto the returned builder as many updates as you want. In this example, we change the certificate status to `VERIFIED`.
3. At the end of your chain of updates, you need to build the builder (into an object, in\-memory).
4. And then, finally, you need to `.save()` that object to persist those changes in Atlan (passing the client for the tenant you want to save it in). The response will contain details of the change: whether the asset was created, updated, or nothing happened because the asset already had those changes.

| Update an asset (atlan\_live\_test.py) | |
| --- | --- |
| ```  7  8  9 10 11 12 13 14 15 ``` | ``` from pyatlan.model.assets import Table from pyatlan.model.enums import CertificateStatus  to_update = Table.updater(  # (1)     qualified_name="default/snowflake/1234567890/MY_DB/MY_SCHEMA/MY_TABLE",     name="MY_TABLE", ) to_update.certificate_status = CertificateStatus.VERIFIED  # (2) response = client.asset.save(to_update)  # (3)  ``` |

1. You can update an asset *without* first looking the asset up, if you know (can construct) its identifying `qualified_name`. Using the `updater()` class method on any asset type, you pass in (typically) the `qualified_name` and name of the asset.
2. You can then add onto the returned object as many updates as you want. In this example, we change the certificate status to `VERIFIED`.
3. And then, finally, you need to `client.asset.save()` that object to persist those changes in Atlan. The response will contain details of the change: whether the asset was created, updated, or nothing happened because the asset already had those changes.

| Update an asset (AtlanLiveTest.kt) | |
| --- | --- |
| ```  4  5  6  7  8  9 10 11 ``` | ``` AtlanClient().use { client ->     val toUpdate = Table.updater( // (1)             "default/snowflake/1234567890/MY_DB/MY_SCHEMA/MY_TABLE",             "MY_TABLE")         .certificateStatus(CertificateStatus.VERIFIED) // (2)         .build() // (3)     val response = toUpdate.save(client) // (4) }  ``` |

1. You can update an asset *without* first looking the asset up, if you know (can construct) its identifying `qualifiedName`. Using the `updater()` static method on any asset type, you pass in (typically) the `qualifiedName` and name of the asset. This returns a builder onto which you can then chain any updates.
2. You can then chain onto the returned builder as many updates as you want. In this example, we change the certificate status to `VERIFIED`.
3. At the end of your chain of updates, you need to build the builder (into an object, in\-memory).
4. And then, finally, you need to `.save()` that object to persist those changes in Atlan (passing the client for the tenant you want to save it in). The response will contain details of the change: whether the asset was created, updated, or nothing happened because the asset already had those changes.

| Update an asset (main.go) | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` toUpdate := &assets.Table{} // (1) toUpdate.Updater(     "default/snowflake/1234567890/MY_DB/MY_SCHEMA/MY_TABLE",     "MY_TABLE" ) toUpdate.CertificateStatus = &atlan.CertificateStatusVerified // (2) response, err := assets.Save(toUpdate) // (3)  ``` |

1. You can update an asset *without* first looking the asset up, if you know (can construct) its identifying `qualifiedName`. Using the `Updater()` method on any asset type, you pass in (typically) the `qualifiedName` and name of the asset. This returns an object into which you can then place any updates.
2. You can place into the returned object as many updates as you want. In this example, we change the certificate status to `VERIFIED`.
3. And then, finally, you need to `.Save()` that object to persist those changes in Atlan. The response will contain details of the change: whether the asset was created, updated, or nothing happened because the asset already had those changes.

Atlan will handle idempotency

By sending only the changes you want to apply, Atlan can make idempotent updates.

* Atlan will only attempt to update the asset with the changes you send.
* Atlan leaves any existing metadata on the asset as\-is.
* If the asset already has the metadata values you are sending, Atlan does nothing. It will not even update audit details like the last update timestamp, and is thus idempotent.

### Bulk changes[¶](#bulk-changes "Permanent link")

What if you want to make changes to many assets, as efficiently as possible?

In that case, you are best making use of a combination of SDK functionality — [search, trim, and batch](../patterns/bulk/end-to-end/):

Java

Python

Kotlin

Go

| Bulk changes (AtlanLiveTest.java) | |
| --- | --- |
| ```  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` try (AtlanClient client = new AtlanClient()) {     ParallelBatch batch = ParallelBatch(client, 20); // (1)     Table.select(client) // (2)         .where(Table.NAME.eq("MY_TABLE"))         .includeOnResults(Table.CERTIFICATE_STATUS) // (3)         .pageSize(20) // (4)         .stream(true) // (5)         .forEach(a -> {             batch.add( // (6)                 a.trimToRequired() // (7)                     .certificateStatus(CertificateStatus.DEPRECATED)                     .build());         });     batch.flush(); // (8)     List<Asset> created = batch.getCreated(); // (9)     List<Asset> updated = batch.getUpdated(); }  ``` |

1. Start by initializing a batch. Through this batch, we can automatically queue up and bulk\-upsert assets — in this example, 20 at a time.
2. Then use the search pattern we discussed earlier to find all the assets you want to update.
3. Be sure to include any details you might need to make a decision about whether to update the asset or not (and what to update it with).
4. It is a good idea to set the page size for search results to match the asset batch size, for maximal efficiency.
5. When you stream the results of the search, you can send an optional boolean parameter. If set to `true`, this will stream the pages of results in parallel (across multiple threads), improving throughput.
6. When you then operate on each search result, you can `add()` any updates directly into the batch you created earlier. The batch itself will handle saving these to Atlan when a sufficient number have been queued up (20, in this example).
7. To make an update to a search result, first call `trimToRequired()` against the result. This will pare down the asset to its minimal required attributes and return a builder. You can then chain as many updates onto this builder as you want, keeping to the pattern we discussed above — ensuring you are sending only changes.
8. You must `flush()` the batch outside of any loop where you've added assets into it. This ensures any final remaining elements in the batch are still sent to Atlan, even if the batch is not "full".
9. Finally, from the batch you can retrieve the minimal details about any assets it created or updated.

| Bulk changes (atlan\_live\_test.py) | |
| --- | --- |
| ```  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 ``` | ``` from pyatlan.model.fluent_search import FluentSearch from pyatlan.model.assets import Table from pyatlan.client.asset import Batch from pyatlan.model.enums import CertificateStatus  batch = Batch(client.asset, max_size=20)  # (1) request = (  # (2)     FluentSearch()     .where(FluentSearch.asset_type(Table))     .where(FluentSearch.active_assets())     .where(Table.NAME.eq("MY_TABLE"))     .include_on_results(Table.CERTIFICATE_STATUS)  # (3)     .page_size(20)  # (4) ).to_request() tables = [] for result in client.asset.search(request):     revised = result.trim_to_required()  # (5)     revised.certificate_status = CertificateStatus.DEPRECATED     batch.add(revised)  # (6) batch.flush()  # (7) created = batch.created  # (8) updated = batch.updated  ``` |

1. Start by initializing a batch. Through this batch, we can automatically queue up and bulk\-upsert assets — in this example, 20 at a time.
2. Then use the search pattern we discussed earlier to find all the assets you want to update.
3. Be sure to include any details you might need to make a decision about whether to update the asset or not (and what to update it with).
4. It is a good idea to set the page size for search results to match the asset batch size, for maximal efficiency.
5. When you then operate on each search result, first call `trim_to_required()` against the result. This will pare down the asset to its minimal required attributes. You can then add as many updates onto this object as you want, keeping to the pattern we discussed above — ensuring you are sending only changes.
6. You can then `add()` any updated objects directly into the batch you created earlier. The batch itself will handle saving these to Atlan when a sufficient number have been queued up (20, in this example).
7. You must `flush()` the batch outside of any loop where you've added assets into it. This ensures any final remaining elements in the batch are still sent to Atlan, even if the batch is not "full".
8. Finally, from the batch you can retrieve the minimal details about any assets it created or updated.

| Bulk changes (AtlanLiveTest.kt) | |
| --- | --- |
| ```  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` AtlanClient().use { client ->     val batch = ParallelBatch(client, 20) // (1)     Table.select(client) // (2)         .where(Table.NAME.eq("MY_TABLE"))         .includeOnResults(Table.CERTIFICATE_STATUS) // (3)         .pageSize(20) // (4)         .stream(true) // (5)         .forEach { a ->             batch.add( // (6)                 a.trimToRequired() // (7)                     .certificateStatus(CertificateStatus.DEPRECATED)                     .build())         }     batch.flush() // (8)     val created = batch.created // (9)     val updated = batch.updated }  ``` |

1. Start by initializing a batch. Through this batch, we can automatically queue up and bulk\-upsert assets — in this example, 20 at a time.
2. Then use the search pattern we discussed earlier to find all the assets you want to update.
3. Be sure to include any details you might need to make a decision about whether to update the asset or not (and what to update it with).
4. It is a good idea to set the page size for search results to match the asset batch size, for maximal efficiency.
5. When you stream the results of the search, you can send an optional boolean parameter. If set to `true`, this will stream the pages of results in parallel (across multiple threads), improving throughput.
6. When you then operate on each search result, you can `add()` any updates directly into the batch you created earlier. The batch itself will handle saving these to Atlan when a sufficient number have been queued up (20, in this example).
7. To make an update to a search result, first call `trimToRequired()` against the result. This will pare down the asset to its minimal required attributes and return a builder. You can then chain as many updates onto this builder as you want, keeping to the pattern we discussed above — ensuring you are sending only changes.
8. You must `flush()` the batch outside of any loop where you've added assets into it. This ensures any final remaining elements in the batch are still sent to Atlan, even if the batch is not "full".
9. Finally, from the batch you can retrieve the minimal details about any assets it created or updated.

| Bulk changes (main.go) | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 ``` | ``` batch := assets.NewBatch(ctx, 20, true, atlan.IGNORE, true) // (1) searchResponse, _ := assets.NewFluentSearch(). // (2)     AssetType("Table").     ActiveAssets().     Where(ctx.Table.NAME.Eq("MY_TABLE")).     IncludeOnResults(assets.CERTIFICATE_STATUS). // (3)     PageSizes(20). // (4)     Execute()  entities, errIter := searchResponse.Iter()  for asset := range entities {     revised, err := assets.TrimToRequired(*asset) // (5)     if err != nil {         logger.Log.Errorf("Error trimming asset: %v", err)     }     revised.CertificateStatus = &atlan.CertificateStatusVerified     err = batch.Add(revised) // (6)     if err != nil {         logger.Log.Errorf("Failed to add asset to batch: %v", err)     } }  if err := <-errIter; err != nil {     fmt.Println("Error during iteration:", err) }  batch.Flush() // (7)  for _, asset := range batch.Created() { // (8)     fmt.Println(asset) } for _, asset := range batch.Updated() {     fmt.Println(asset) }  ``` |

1. Start by initializing a batch. Through this batch, we can automatically queue up and bulk\-upsert assets — in this example, 20 at a time.
2. Then use the search pattern we discussed earlier to find all the assets you want to update.
3. Be sure to include any details you might need to make a decision about whether to update the asset or not (and what to update it with).
4. It is a good idea to set the page size for search results to match the asset batch size, for maximal efficiency.
5. When you then operate on each search result, first call `TrimToRequired()` against the result. This will pare down the asset to its minimal required attributes. You can then add as many updates onto this object as you want, keeping to the pattern we discussed above — ensuring you are sending only changes.
6. You can then `add()` any updated objects directly into the batch you created earlier. The batch itself will handle saving these to Atlan when a sufficient number have been queued up (20, in this example).
7. You must `flush()` the batch outside of any loop where you've added assets into it. This ensures any final remaining elements in the batch are still sent to Atlan, even if the batch is not "full".
8. Finally, from the batch you can retrieve the minimal details about any assets it created or updated.

Where to go from here[¶](#where-to-go-from-here "Permanent link")
-----------------------------------------------------------------

Now that you know the basics, it's up to you to delve further into whichever areas you like. You can search (upper\-right) or use the top\-level menu:

* ---

    Common operations on assets, that are available across all assets.

     [Discover actions](../snippets/)
* **Asset\-specific**

---

    Operations that are specific to certain assets.

     [Focus on a specific kind of asset](../patterns/)
* **Governance structures**

---

    Operations dealing with governance structures, rather than assets.

     [Manage governance structures](../governance/)
* **Samples**

---

    Real code samples our customers use to solve particular use cases.

     [Review live samples](https://solutions.atlan.com/tags/#code-available)
* **Searching**

---

    Delve deep into searching and aggregating metadata.

     [Learn more about searching](../search/)
* **Events**

---

    Delve deep into the details of the events Atlan triggers.

     [Learn more about events](../events/)

---

1. Note that this is intentionally kept as simple as possible. The walkthrough is not intended to be exhaustive. Where possible, we have cross\-referenced other detailed examples elsewhere in the site.[↩](#fnref:1 "Jump back to footnote 1 in the text")
2. There are orders of magnitude lower chances of GUIDs conflicting with each other than there are grains of sand on the planet. (And generating them does **not** rely on a central ID\-assigning registry.)[↩](#fnref:2 "Jump back to footnote 2 in the text")

---

2023\-04\-192025\-03\-26

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/getting-started/) to provide us with more information. 

Back to top

[Previous Overview](..) [Next Other important concepts](../concepts/review/) 

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

