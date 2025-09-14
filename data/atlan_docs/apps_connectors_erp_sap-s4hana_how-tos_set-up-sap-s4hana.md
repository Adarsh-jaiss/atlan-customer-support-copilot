# Source URL
https://docs.atlan.com/apps/connectors/erp/sap-s4hana/how-tos/set-up-sap-s4hana

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/erp/sap-s4hana/how-tos/set-up-sap-s4hana
link-alternate: https://docs.atlan.com/apps/connectors/erp/sap-s4hana/how-tos/set-up-sap-s4hana
meta-description: Set up user accounts and permissions required for SAP S/4HANA metadata extraction in Atlan.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Set up user accounts and permissions required for SAP S/4HANA metadata extraction in Atlan.
meta-og-locale: en
meta-og-title: Set up SAP S/4HANA | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/erp/sap-s4hana/how-tos/set-up-sap-s4hana
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up SAP S/4HANA | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up SAP S/4HANA
==================

This guide explains how to create a dedicated service user in SAP S/4HANA and grant the necessary permissions for Atlan to extract metadata.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, make sure you have:

* Administrative access to SAP S/4HANA.
* SAP system details, including:
    + Host
    + System number
    + Client number

Create communication user for metadata extraction[â](#create-communication-user-for-metadata-extraction "Direct link to Create communication user for metadata extraction")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1. In the SAP GUI command field, enter `SU01` and press **Enter** to open **User Maintenance**.
2. In the **User** field, enter a name for the new service user and click **Create**.
3. On the **Address** tab, provide the required contact information.
4. Open the **Logon Data** tab and:
    * Set an initial password (enter it twice).
    * Set **User Type** to **C (Communications Data)**.
5. Switch to the **Roles** tab and assign roles that enable:
    * Remote function call (RFC) execution
    * Table\-level read access for metadata tables
    * Access to system\-level information
6. Verify that the assigned roles enable execution of these RFC modules:
    * `STFC_CONNECTION`: Verifies connectivity between Atlan and SAP S/4HANA.
    * `RFC_SYSTEM_INFO`: Retrieves system metadata such as SYSID, operating system, and release version.
    * `RFC_READ_TABLE`: Enables table\-level reads for metadata extraction.
    * `DD_DDL_DEPENDENCY_GET`: Fetches dependencies used in CDS views and table lineage.
7. Click **Save** to confirm the changes.

noteThe user must change the password on first login.

Next steps[â](#next-steps "Direct link to Next steps")
--------------------------------------------------------

* [Crawl SAP S/4HANA](/apps/connectors/erp/sap-s4hana/how-tos/crawl-sap-s4hana): Follow the instructions to extract metadata using the configured service user.
**Tags:*** [erp](/tags/erp)
* [setup](/tags/setup)
* [permissions](/tags/permissions)
* [sap\-s4hana](/tags/sap-s-4-hana)

[PreviousSAP S/4HANA](/apps/connectors/erp/sap-s4hana)[NextCrawl SAP S/4HANA](/apps/connectors/erp/sap-s4hana/how-tos/crawl-sap-s4hana)

Copyright Â© 2025 Atlan Pte. Ltd.

