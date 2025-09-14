# Source URL
https://docs.atlan.com/product/capabilities/lineage/troubleshooting/troubleshooting-lineage

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/lineage/troubleshooting/troubleshooting-lineage
link-alternate: https://docs.atlan.com/product/capabilities/lineage/troubleshooting/troubleshooting-lineage
meta-description: So you've crawled your source, and mined the queries, but lineage is missing. Why?
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: So you've crawled your source, and mined the queries, but lineage is missing. Why?
meta-og-locale: en
meta-og-title: Troubleshooting lineage | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/lineage/troubleshooting/troubleshooting-lineage
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Troubleshooting lineage | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Troubleshooting lineage
=======================

So you've crawled your source, and mined the queries, but lineage is missing. Why?

Where to look first?[â](#where-to-look-first "Direct link to Where to look first?")
-------------------------------------------------------------------------------------

### Views[â](#views "Direct link to Views")

* Check the SQL attribute of the view data asset \- this must have SQL in it for view lineage to appear.
* The crawler workflows populate the SQL attribute. If it's empty on the view asset, the crawler is the suspect.

### Tables[â](#tables "Direct link to Tables")

* The miner workflows populate table lineage. If it's missing, the miner is the suspect.
* Check the SQL picked up by the miner (for example, in [S3](/product/connections/how-tos/mine-queries-through-s3)).
* If the miner picks up the necessary SQL but lineage is not produced, check if any of the assets involved are missing.

### Data stores to BI assets[â](#data-stores-to-bi-assets "Direct link to Data stores to BI assets")

* For Atlan to link these assets, the upstream assets (data stores) must *first* exist.
* If they are only created *after* the downstream assets, lineage will stay unlinked.
* Or if some of the assets are missing, lineage may have gaps preventing linkage.

### Show more menu[â](#show-more-menu "Direct link to Show more menu")

* Lineage may appear missing if the linked asset is hidden in the *Show more* menu. Although it will still appear in the list of upstream or downstream assets in the *Lineage* tab in the side profile, it will not appear visually in the lineage graph. Click **Show more columns** to see the rest of the assets and their lineage.

### Miner logic[â](#miner-logic "Direct link to Miner logic")

When setting up the miner for the first time, you will need to provide a start date \- ranging from the last two days up to past two weeks of query history. If an asset has not been queried during the selected time period, data lineage will be unavailable.

For subsequent runs, the miner will fetch query history based on the following logic:

`START_TIME` â¤ `CURRENT_DATE` \- `INTERVAL '1 DAY'`

For example, the miner logic for January 23 will be:

* Jan 22 5 p.m. â¤ Jan 23 00:00 \- 1 day
* Jan 22 5 p.m. â¤ Jan 22 00:00

The miner will not fetch the data for the previous day (January 22\) on the current day (January 23\). Atlan requires a minimum lag of 24 to 48 hours to capture all the relevant transformations that were part of a session.

Causes of missing lineage[â](#causes-of-missing-lineage "Direct link to Causes of missing lineage")
-----------------------------------------------------------------------------------------------------

There are several reasons why lineage may be missing:

### Workflow ordering[â](#workflow-ordering "Direct link to Workflow ordering")

The order of operations you run in Atlan is important. To have lineage across tools, you need to:

1. Crawl data stores first.
2. Mine query logs (and dbt) second.
3. Crawl BI tools last.

If you've used a different order, the upstream assets (data stores) may not yet exist when you load the BI metadata. Then you can have lineage within the BI metadata, but not between the BI metadata and the data sources.

If that's the case for you, don't worry. Re\-run your existing workflows in the order above and Atlan should resolve it.

### Crawling filters[â](#crawling-filters "Direct link to Crawling filters")

Another reason lineage may have gaps is that linking assets do not exist, even after re\-running the crawler.

When crawling a source, you can specify filters on which metadata to include and exclude. If you've excluded metadata needed to link assets into lineage, then end\-to\-end lineage will have gaps.

Check that you have not excluded any of the asset(s) you're expecting to be in lineage. (And remember that using an *include* filter means that not all metadata is being crawled \- some is being excluded.)

If in doubt, try running your workflows without include or exclude filters.

### Source permissions[â](#source-permissions "Direct link to Source permissions")

Atlan is not the *only* place where you can filter metadata.

Atlan accesses your sources through credentials you provide. Those credentials have assigned permissions controlling what (meta)data they can access in the source. If those permissions prevent access to some (meta)data, then Atlan cannot crawl that metadata.

So if ordering and filter don't fix the problem, check your source permissions. Are they providing access to all the data assets you need for lineage?

### Different connections, same source[â](#different-connections-same-source "Direct link to Different connections, same source")

We currently do not resolve lineage across different connections for the same source. You need to crawl (and mine) all assets from a given source through the same connection to generate lineage.

dangerThis one is the most subtle of the causes. The assets may even appear to be in the environment in this case. Check the `qualifiedName` of the asset matches *exactly* what lineage expects.

### Temporary tables[â](#temporary-tables "Direct link to Temporary tables")

If your data processing tool uses temporary tables, Atlan can still support generating lineage accurately.

For example:

* Table A â temporary table â table B
* Lineage will be represented as table A â table B in Atlan.

In this case, Atlan assumes that tables A and B are present in Atlan. However, if table A is missing, then Atlan will not be able to generate lineage.

### Cross\-connection links[â](#cross-connection-links "Direct link to Cross-connection links")

If the combination of database, schema, and table name for an asset is the same across different connections, it is possible that Atlan may create unexpected links for these assets.

For example, if your `Production` environment has the same set of databases, schemas, and tables as your `Staging` environment and both these source systems are crawled, Atlan may connect BI reports to either of these assets due to the name\-match algorithm.

### Indirect data flow[â](#indirect-data-flow "Direct link to Indirect data flow")

Atlan currently only processes and visualizes direct data flow on the lineage graph. However, assets can be related through other means such as control flow or conditional statements, in which case there is no data movement between them. Atlan currently neither processes nor visualizes such relationships on the lineage graph.

For example, when processing the following query:

```
insert into  
    tgt_tab (col_x, col_y)  
select  
    col_x,  
    case  
        when col_y > 100 then 'High'  
        else 'Low'  
    end  
from  
src_tab  

```
Atlan will display the following links in the lineage graph:

* src\_tab â tgt\_tab (table\-level data flow)
* src\_tab.col\_x â tgt\_tab.col\_x (column\-level data flow)

Note that there is no lineage generated for col\_y. This is because the data present in src\_tab.col\_y does not actually flow or get transferred to tgt\_tab.col\_y.

Lineage persistence[â](#lineage-persistence "Direct link to Lineage persistence")
-----------------------------------------------------------------------------------

Lineage in Atlan is reflective of the last valid set of transformations performed for a particular *target* table in the external (*source*) system. Atlan retains these transformations as lineage and does not auto\-delete or sunset the [process entities](/product/capabilities/lineage/concepts/what-are-processes) (*links*).

The exception to this rule is when new information pertaining to the same *target* table is inferred in the latest job run. In this case, Atlan will replace the previous *links* with new ones.

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousWhy is the SQL query visible only in Snowflake process and not in dbt process nodes?](/product/capabilities/lineage/faq/sql-query-visibility-snowflake)[NextWhy is my Databricks lineage API not working?](/product/capabilities/lineage/troubleshooting/why-is-my-databricks-lineage-api-not-working)

Copyright Â© 2025 Atlan Pte. Ltd.

