# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/tableau/references/preflight-checks-for-tableau

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/references/preflight-checks-for-tableau
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/references/preflight-checks-for-tableau
meta-description: The [Server Info](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_server.htm#server_info) REST API is used to fetch the `restApiVersion` value.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: The [Server Info](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_server.htm#server_info) REST API is used to fetch the `restApiVersion` value.
meta-og-locale: en
meta-og-title: Preflight checks for Tableau | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/references/preflight-checks-for-tableau
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Tableau | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Tableau
============================

Before [running the Tableau crawler](/apps/connectors/business-intelligence/tableau/how-tos/crawl-tableau), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

Server REST API version[â](#server-rest-api-version "Direct link to Server REST API version")
-----------------------------------------------------------------------------------------------

The [Server Info](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_server.htm#server_info) REST API is used to fetch the `restApiVersion` value.

â `Check successful` if the `restApiVersion` is greater than or equal to 2\.4\.

Projects view capability[â](#projects-view-capability "Direct link to Projects view capability")
--------------------------------------------------------------------------------------------------

First, the list of projects in the *Include Projects* and *Exclude Projects* fields is determined. Next, the [Query Projects](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_projects.htm#query_projects) REST API is used to fetch the actual list of projects for which the user has [view capability](https://help.tableau.com/current/server/en-us/permissions_capabilities.htm#projects).

â `Check successful` if all the projects from the first list are in the second one.

**Did you know?**Atlan supports user credentials with *Viewer* role. Ensure that you grant [View capability](https://help.tableau.com/current/online/en-us/permissions_capabilities.htm#capabilities) for all the assets you want to crawl.

Metadata API[â](#metadata-api "Direct link to Metadata API")
--------------------------------------------------------------

â `Check successful`

â `Cannot run the query because the Metadata API has not been enabled yet. Run the 'tsm maintenance metadata-services enable' command to enable the Metadata API or contact the Tableau administrator`

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)
* [api](/tags/api)

[PreviousWhat does Atlan crawl from Tableau?](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau)[NextTroubleshooting Tableau connectivity](/apps/connectors/business-intelligence/tableau/troubleshooting/troubleshooting-tableau-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

