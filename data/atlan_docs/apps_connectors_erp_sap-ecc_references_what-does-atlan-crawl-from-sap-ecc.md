# Source URL
https://docs.atlan.com/apps/connectors/erp/sap-ecc/references/what-does-atlan-crawl-from-sap-ecc

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/erp/sap-ecc/references/what-does-atlan-crawl-from-sap-ecc
link-alternate: https://docs.atlan.com/apps/connectors/erp/sap-ecc/references/what-does-atlan-crawl-from-sap-ecc
meta-description: What does Atlan crawl from SAP ECC? <Badge variant="preview" text="Private Preview" link="/get-started/references/product-release-stages#private-preview" />
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: What does Atlan crawl from SAP ECC? <Badge variant="preview" text="Private Preview" link="/get-started/references/product-release-stages#private-preview" />
meta-og-locale: en
meta-og-title: What does Atlan crawl from SAP ECC? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/erp/sap-ecc/references/what-does-atlan-crawl-from-sap-ecc
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from SAP ECC? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from SAP ECC? [Private Preview](/get-started/references/product-release-stages#private-preview)
=====================================================================================================================

Atlan integrates with SAP ECC to crawl and map various asset types, helping you gain insights into structured business data. This page outlines the SAP ECC components that Atlan supports and how their properties are mapped.

Lineage[â](#lineage "Direct link to Lineage")
-----------------------------------------------

Atlan supports lineage for the following lineage:

* Asset Lineage \- Table to View
* Column Level Lineage \- Table Columns to View Columns Assets

Assets[â](#assets "Direct link to Assets")
--------------------------------------------

Atlan extracts metadata from SAP ECC across different asset types, including:

* **[Components](#components):** Software modules providing specific functionalities.
* **[Tables](#tables):** Structured storage for master data, transactions, and configurations.
* **[Views](#views):** Logical representations of data for efficient access.
* **[Columns](#columns):** Data attributes within tables and views.
* **[ABAP programs](#abap-programs):** Custom scripts written for automation and processing.
* **[Function modules](#function-modules):** Reusable logic blocks for ABAP programs and remote function calls.
* **[Transaction Codes](#transaction-codes):** Shortcuts for executing SAP functions.

The following sections detail how each asset type is mapped in Atlan.

### Components[â](#components "Direct link to Components")

SAP ECC components are modular software units that deliver specific business functions. These components form the foundation of SAP's enterprise applications, enabling functionalities such as finance, logistics, and human resources. Atlan maps Components from SAP ECC to its `SapErpComponent` asset type.

| Source property | Atlan property |
| --- | --- |
| `TEXT` | `name` |
| `NAME` | `sapComponentName` |

### Tables[â](#tables "Direct link to Tables")

Tables in SAP ECC store structured business data, including master records, transactional details, and configuration settings. These tables form the foundation of SAP's data storage and retrieval system. Atlan maps Table from SAP ECC to its `SapErpTable` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABNAME` | `name` |
| `DDTEXT` | `description` |
| `TABCLASS` | `sapErpTableType` |
| `DEVCLASS` | `sapPackageName` |
| `Column Count` | `sapFieldCount` |
| `CONTFLAG` | `sapErpTableDeliveryClass` |
| `AS4USER` | `sourceUpdatedBy` |
| `AS4DATE` | `sourceUpdatedAt` |

### Views[â](#views "Direct link to Views")

Views provide a logical representation of data by combining information from one or more tables. They simplify data access and reporting by allowing users to work with pre\-defined, structured datasets. Atlan maps View from SAP ECC to its `SapErpView` asset type.

| Source property | Atlan property |
| --- | --- |
| `VIEWNAME` | `name` |
| `DDTEXT` | `description` |
| `VIEWCLASS` | `sapErpViewType` |
| `DEVCLASS` | `sapPackageName` |
| `Column Count` | `sapFieldCount` |
| `AS4USER` | `sourceUpdatedBy` |
| `AS4DATE` | `sourceUpdatedAt` |

### Columns[â](#columns "Direct link to Columns")

Columns define individual data attributes within tables and views. Each column has a specific data type, length, and constraints, ensuring accurate data representation and integrity. Atlan maps Column from SAP ECC to its `SapErpColumn` asset type.

| Source property | Atlan property |
| --- | --- |
| `FIELDNAME` | `name` |
| `TABNAME` | `sapErpTableName or sapErpViewName` |
| `ROLLNAME` | `sapErpColumnDataElement` |
| `DATATYPE` | `sapDataType` |
| `INTTYPE` | `sapErpColumnLogicalDataType` |
| `LENG` | `sapErpColumnLength` |
| `DECIMALS` | `sapErpColumnDecimals` |
| `KEYFLAG` | `sapErpColumnIsPrimary` |
| `CHECKTABLE` | `sapErpColumnIsForeign` |
| `NOTNULL` | `sapErpColumnIsMandatory` |
| `DEVCLASS` | `sapPackageName` |
| `POSITION` | `sapFieldOrder` |

### ABAP programs[â](#abap-programs "Direct link to ABAP programs")

Advanced Business Application Programming (ABAP) programs are scripts used to automate processes, manipulate data, and extend SAP functionalities. These programs are written in SAP's proprietary programming language. Atlan maps ABAP Programs from SAP ECC to its `SapErpAbapProgram` asset type.

| Source property | Atlan property |
| --- | --- |
| `PROGNAME` | `name` |
| `TEXT` | `description` |
| `SUBC` | `sapErpAbapProgramType` |
| `DEVCLASS` | `sapPackageName` |
| `CNAM` | `sourceCreatedBy` |
| `CDAT` | `sourceCreatedAt` |
| `UNAM` | `sourceUpdatedBy` |
| `UDAT` | `sourceUpdatedAt` |

### Function modules[â](#function-modules "Direct link to Function modules")

Function modules are reusable code blocks that perform predefined operations in SAP ECC. They can be called within ABAP programs or accessed remotely to execute business logic efficiently. Atlan maps Function Modules from SAP ECC to its `SapErpFunctionModule` asset type.

| Source property | Atlan property |
| --- | --- |
| `FUNCNAME` | `name` |
| `STEXT` | `description` |
| `FUNC_GROUP` | `sapErpFunctionModuleGroup` |
| `Import Parameters` | `sapErpFunctionModuleImportParams` |
| `Import Parameters Count` | `sapErpFunctionModuleImportParamsCount` |
| `Export Parameters` | `sapErpFunctionModuleExportParams` |
| `Export Parameters Count` | `sapErpFunctionModuleExportParamsCount` |
| `Exception List` | `sapErpFunctionExceptionList` |
| `Exception List Count` | `sapErpFunctionExceptionListCount` |
| `DEVCLASS` | `sapPackageName` |

### Transaction Codes[â](#transaction-codes "Direct link to Transaction Codes")

Transaction codes (T\-codes) provide quick access to specific SAP functions or screens. Users enter T\-codes in the SAP command field to navigate directly to related operations, improving workflow efficiency. Atlan maps Transaction Code from SAP ECC to its `SapErpTransactionCode` asset type.

| Source property | Atlan property |
| --- | --- |
| `FUNCNAME` | `name` |
| `STEXT` | `description` |
| `DEVCLASS` | `sapPackageName` |

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)
* [configuration](/tags/configuration)

[PreviousCrawl SAP ECC](/apps/connectors/erp/sap-ecc/how-tos/crawl-sap-ecc)

Copyright Â© 2025 Atlan Pte. Ltd.

