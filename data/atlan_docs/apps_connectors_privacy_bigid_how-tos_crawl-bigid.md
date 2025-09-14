# Source URL
https://docs.atlan.com/apps/connectors/privacy/bigid/how-tos/crawl-bigid

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/privacy/bigid/how-tos/crawl-bigid
link-alternate: https://docs.atlan.com/apps/connectors/privacy/bigid/how-tos/crawl-bigid
meta-description: Configure and run the Atlan BigID workflow to crawl metadata from BigID.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Configure and run the Atlan BigID workflow to crawl metadata from BigID.
meta-og-locale: en
meta-og-title: Crawl BigID | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/privacy/bigid/how-tos/crawl-bigid
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl BigID | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl BigID
===========

Configure the Atlan BigID workflow to crawl metadata from your BigID instance and discover privacy\-related data assets in Atlan. This guide walks through setting up the workflow, configure connection, map data sources, and running the crawler.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, make sure you have:

* Set up a BigID system user account. If not, follow the [Set up BigID](/apps/connectors/privacy/bigid/how-tos/set-up-bigid) guide for detailed instructions.
* Your BigID domain name and API token which is needed to configure the workflow.
* To crawl metadata from BigID, review the [order of operations](/product/connections/how-tos/order-workflows).

Permissions required[â](#permissions-required "Direct link to Permissions required")
--------------------------------------------------------------------------------------

To successfully configure the BigID workflow, make sure that your user role has below permissions:

* **Atlan**: Admin or Workflow Admin permissions
* **BigID**: System user with API access

Set up workflow[â](#set-up-workflow "Direct link to Set up workflow")
-----------------------------------------------------------------------

Follow these steps in Atlan to create a BigID workflow:

### Set up connection[â](#set-up-connection "Direct link to Set up connection")

Set up the connection details and specify who can manage this connection. Follow these steps to configure the connection:

* Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`, `development`, `gold`, or `analytics`
* (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*. If you don't specify any user or group, nobody can manage the connection \- not even admins.
* At the bottom of the screen, click **Next** to proceed

### Map data sources[â](#map-data-sources "Direct link to Map data sources")

Map BigID Data Sources to Atlan Connections to establish the relationship between your data assets. Follow these steps to map data sources:

* **Atlan Connection**: Select the Atlan Connection that houses the data assets that you're trying to bring BigID metadata for
* **BigID Datasources**: Select one or more BigID Data Sources that contain assets associated with the mapped Atlan Connection
* Click **Next** to configure custom metadata

### Configure custom metadata[â](#configure-custom-metadata "Direct link to Configure custom metadata")

Set up custom metadata to store BigID\-discovered attributes in Atlan. Follow these steps to configure custom metadata:

* **Custom Metadata**: Create a new *Custom Metadata* on Atlan named **BigID Metadata** with a text\-based property named **Attributes**. This is used to house the BigID\-discovered, scan\-related attributes that the workflow brings over to Atlan
* **Attribute Custom Metadata**: Enter the value as **BigID Metadata**
* **Attribute Custom Metadata Property**: Enter the value as **Attributes**

### Run crawler[â](#run-crawler "Direct link to Run crawler")

Execute the BigID crawler to discover and import metadata. Follow these steps to run crawler:

* **Run immediately**: Click the **Run** button to run the crawler once immediately
* **Schedule run**: Click the **Schedule Run** button to schedule the crawler to run hourly, daily, weekly, or monthly

Troubleshooting[â](#troubleshooting "Direct link to Troubleshooting")
-----------------------------------------------------------------------

If you encounter issues during the BigID crawl process:

* **Authentication issues**: Verify your API token is valid and has the correct permissions
* **SSL certificate errors**: Check that you've provided the correct root certificate PEM value
* **No metadata appears**: Check that data source mapping is correct and BigID contains assets for the mapped connections

Need help[â](#need-help "Direct link to Need help")
-----------------------------------------------------

* **Contact Atlan support**: For issues related to Atlan integration, [contact Atlan support](/support/submit-request)

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [What does Atlan crawl from BigID](/apps/connectors/privacy/bigid/references/what-does-atlan-crawl-from-bigid)
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [privacy](/tags/privacy)
* [bigid](/tags/bigid)

[PreviousSet up BigID](/apps/connectors/privacy/bigid/how-tos/set-up-bigid)[NextWhat does Atlan crawl from BigID?](/apps/connectors/privacy/bigid/references/what-does-atlan-crawl-from-bigid)

Copyright Â© 2025 Atlan Pte. Ltd.

