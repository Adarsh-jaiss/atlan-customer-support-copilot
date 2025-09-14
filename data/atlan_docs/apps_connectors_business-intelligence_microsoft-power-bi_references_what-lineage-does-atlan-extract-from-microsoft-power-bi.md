# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/references/what-lineage-does-atlan-extract-from-microsoft-power-bi

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/references/what-lineage-does-atlan-extract-from-microsoft-power-bi
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/references/what-lineage-does-atlan-extract-from-microsoft-power-bi
meta-description: This document helps you understand how Atlan generates lineage to upstream SQL sources for your Microsoft Power BI assets using a custom query parser, and the steps you can take while developing reports and dashboards in Microsoft Power BI to create seamless lineage generation.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: This document helps you understand how Atlan generates lineage to upstream SQL sources for your Microsoft Power BI assets using a custom query parser, and the steps you can take while developing reports and dashboards in Microsoft Power BI to create seamless lineage generation.
meta-og-locale: en
meta-og-title: What lineage does Atlan extract from Microsoft Power BI? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/references/what-lineage-does-atlan-extract-from-microsoft-power-bi
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What lineage does Atlan extract from Microsoft Power BI? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What lineage does Atlan extract from Microsoft Power BI?
========================================================

Atlan currently supports the following lineage for [Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/set-up-microsoft-power-bi):

* Lineage between Microsoft Power BI assets crawled in Atlan
* Upstream lineage to SQL warehouse assets, includes table\- and column\-level lineage for the following supported SQL sources:
    + [Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-amazon-redshift)
    + [Databricks](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks)
    + [Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery)
    + [Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics)
    + [Microsoft SQL Server](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-microsoft-sql-server)
    + [MySQL](/apps/connectors/database/mysql/how-tos/set-up-mysql)
    + [Oracle](/apps/connectors/database/oracle/how-tos/set-up-oracle) \- Atlan generates lineage for the following methods of Oracle connectivity:
        - connection string \- for example, `<host_name>:<port>/<service_name>`
        - connect descriptor \- for example, `(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=<host_name>)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=<service_name>)))`
        - Lineage generation for TNS name connectivity is currently not supported.
    + [SAP HANA](/apps/connectors/database/sap-hana/how-tos/set-up-sap-hana)
    + [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake)
    + [Teradata](/apps/connectors/database/teradata/how-tos/set-up-teradata)
    + [Salesforce](/apps/connectors/crm/salesforce/how-tos/set-up-salesforce)

This document helps you understand how Atlan generates lineage to upstream SQL sources for your Microsoft Power BI assets using a custom query parser, and the steps you can take while developing reports and dashboards in Microsoft Power BI to create seamless lineage generation.

Lineage generation[â](#lineage-generation "Direct link to Lineage generation")
--------------------------------------------------------------------------------

Atlan generates lineage for your Microsoft Power BI assets as follows:

* You connect to a SQL data source such as Snowflake and extract relevant SQL tables to create a table in Microsoft Power BI for analysis.
* Once the data has been loaded, you can perform Microsoft Power BI native operations as required.
* Each table created in Microsoft Power BI and part of a dataset has a Power Query expression associated with it. For example:

```
let  
Source = Snowflake.Databases("example.snowflakecomputing.com","EXAMPLE_WAREHOUSE",[Role="EXAMPLE_ROLE"]),  
EXAMPLE_DB = Source{[Name="EXAMPLE_DATABASE_NAME",Kind="Database"]}[Data],  
EXAMPLE_Sch = EXAMPLE_DB{[Name="EXAMPLE_SCHEMA_NAME",Kind="Schema"]}[Data],  
EXAMPLE_Table_Var = EXAMPLE_Sch{[Name="EXAMPLE_TABLE_NAME",Kind="Table"]}[Data]  
in  
EXAMPLE_Table_Var  

```
* Atlan retrieves the Power Query expression as a plain string from the [Microsoft Power BI API](https://learn.microsoft.com/en-us/rest/api/power-bi/admin/workspace-info-get-scan-result) response.
* Atlan's custom query parser then parses the Power Query expression to derive lineage between the upstream SQL tables and Microsoft Power BI table asset.

However, note that the Power Query expression can be modified in the Power Query Editor of the Power BI Desktop application. These modifications may involve using parameter substitutes and variable naming patterns in the Power Query expression.

These modifications may lead to inconsistent behavior in Atlan's query parser. This is because the latter is built on the standard format of a Power Query expression, without any modifications.

Limitations of query parser[â](#limitations-of-query-parser "Direct link to Limitations of query parser")
-----------------------------------------------------------------------------------------------------------

To create seamless lineage generation, Atlan recommends the following when building tables in Microsoft Power BI.

### Using parameters[â](#using-parameters "Direct link to Using parameters")

The Power Query expression associated with a table can be manually modified to serve different use cases. For example, if you're creating multiple tables using data from the same database and schema at source, you may want to use [dynamic M query parameters](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-dynamic-m-query-parameters) to substitute common values in Power Query expressions.

Atlan recommends the following:

* Avoid using the following words to define your parameter names:
    + `Database`
    + `Schema`
    + `Table`
    + `View`
    + `Warehouse`
    + `Role`
* Avoid including any spaces in your parameter names \- for example, `( Example : Example DB )`

For example, Atlan's query parser doesn't support the following:

```
let  
Source = Snowflake.Databases("example.snowflakecomputing.com",WarehouseName,[Role="EXAMPLE_ROLE"]),  
DatabaseName = Source{[Name=DatabaseName,Kind="Database"]}[Data],  
EXAMPLE_Sch = DatabaseName{[Name=SchemaName,Kind="Schema"]}[Data],  
EXAMPLE_Table_Var = EXAMPLE_Sch{[Name=TableName,Kind="Table"]}[Data]  
in  
EXAMPLE_Table_Var  

```
* This example includes `WarehouseName`, `DatabaseName`, `SchemaName`, and `TableName` as parameters, which aren't supported in the query parser.

### Parameter syntax[â](#parameter-syntax "Direct link to Parameter syntax")

There are different formats for the syntax used in parameter names for Power Query expressions. For example, `param_name`, `#âparam_nameâ`, or `#"param nameâ`.

Atlan recommends the following for parameter names:

* Use plain text format
* Avoid any special characters \- for example, `#`, `"`, and more

For example, Atlan's query parser doesn't support the following:

```
let  
Source = Snowflake.Databases("example.snowflakecomputing.com","EXAMPLE_WAREHOUSE",[Role="EXAMPLE_ROLE"]),  
DatabaseName = Source{[Name=#"DatabaseName",Kind="Database"]}[Data],  
EXAMPLE_Sch = DatabaseName{[Name="EXAMPLE_SCHEMA_NAME",Kind="Schema"]}[Data],  
EXAMPLE_Table_Var = EXAMPLE_Sch{[Name="EXAMPLE_TABLE_NAME",Kind="Table"]}[Data]  
in  
EXAMPLE_Table_Var  

```
* This example includes `#"DatabaseName"` as parameter name, which isn't supported in the query parser.

### Variable names[â](#variable-names "Direct link to Variable names")

While using parameters in Power Query expressions, make sure that the variable names don't match the parameter names. For example, Atlan's query parser doesn't support the following:

```
let  
Source = Snowflake.Databases("example.snowflakecomputing.com","EXAMPLE_WAREHOUSE",[Role="EXAMPLE_ROLE"]),  
DatabaseName = Source{[Name=DatabaseName,Kind="Database"]}[Data],  
EXAMPLE_Sch = DatabaseName{[Name="EXAMPLE_SCHEMA_NAME",Kind="Schema"]}[Data],  
EXAMPLE_Table_Var = EXAMPLE_Sch{[Name="EXAMPLE_TABLE_NAME",Kind="Table"]}[Data]  
in  
EXAMPLE_Table_Var  

```
* In this example, `DatabaseName` is used as both a parameter name and variable name, which isn't supported in the query parser.

### User\-defined expressions[â](#user-defined-expressions "Direct link to User-defined expressions")

Parts of a Power Query expression can be parameterized and cross\-referenced in other Power Query expressions. Atlan's query parser currently only parses standard forms of Power Query expressions, hence these user\-defined expressions aren't supported.

Example of a supported Power Query expression:

```
let  
Source = Snowflake.Databases("example.snowflakecomputing.com","EXAMPLE_WAREHOUSE",[Role="EXAMPLE_ROLE"]),  
EXAMPLE_DB = Source{[Name="EXAMPLE_DATABASE_NAME",Kind="Database"]}[Data],  
EXAMPLE_Sch = EXAMPLE_DB{[Name="EXAMPLE_SCHEMA_NAME",Kind="Schema"]}[Data],  
EXAMPLE_Table_Var = EXAMPLE_Sch{[Name="TBL_AGG_SALES_HT_POS_BEER",Kind="Table"]}[Data]  
in  
EXAMPLE_Table_Var  

```
Example of an unsupported Power Query expression:

```
let  
Source = db_source,  
EXAMPLE_Sch = db_source{[Name="EXAMPLE_SCHEMA_NAME",Kind="Schema"]}[Data],  
EXAMPLE_Table_Var = EXAMPLE_Sch{[Name="EXAMPLE_TABLE_NAME",Kind="Table"]}[Data]  
in  
EXAMPLE_Table_Var  

```
Example of a reference expression, parameterized as `db_source`:

```
let  
Source = Snowflake.Databases("example.snowflakecomputing.com","EXAMPLE_WAREHOUSE",[Role="EXAMPLE_ROLE"]),  
EXAMPLE_DB = Source{[Name="EXAMPLE_DATABASE_NAME",Kind="Database"]}[Data]  
in  
EXAMPLE_DB  

```

### Table functions[â](#table-functions "Direct link to Table functions")

For column\-level lineage generation, Atlan's custom query parser currently supports parsing expressions with the following [Table Functions](https://learn.microsoft.com/en-us/powerquery-m/table-functions):

* [Table.RenameColumns](https://learn.microsoft.com/en-us/powerquery-m/table-renamecolumns)
* [Table.TransformColumnNames](https://learn.microsoft.com/en-us/powerquery-m/table-transformcolumnnames)
* [Table.TransformColumns](https://learn.microsoft.com/en-us/powerquery-m/table-transformcolumns)

### Power query functions[â](#power-query-functions "Direct link to Power query functions")

Upstream lineage isn't supported when the data source expression involves the use of certain built\-in Power Query functions. The following functions aren't supported:

* `Csv.Document`
* `DateTime.LocalNow`
* `Excel.Workbook`
* `Folder.Files`
* `Json.Document`
* `List.Dates`
* `SharePoint.Files`
* `SharePoint.Tables`
* `UsageMetricsDataConnector.GetMetricsData`
* `Xml.Tables`
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousPreflight checks for Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/references/preflight-checks-for-microsoft-power-bi)[NextTroubleshooting Microsoft Power BI connectivity](/apps/connectors/business-intelligence/microsoft-power-bi/troubleshooting/troubleshooting-microsoft-power-bi-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

