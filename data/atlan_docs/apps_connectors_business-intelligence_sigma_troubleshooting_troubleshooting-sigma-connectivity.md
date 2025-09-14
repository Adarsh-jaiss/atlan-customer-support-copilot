# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/sigma/troubleshooting/troubleshooting-sigma-connectivity

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/troubleshooting/troubleshooting-sigma-connectivity
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/troubleshooting/troubleshooting-sigma-connectivity
meta-description: Learn about troubleshooting sigma connectivity.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about troubleshooting sigma connectivity.
meta-og-locale: en
meta-og-title: Troubleshooting Sigma connectivity | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/troubleshooting/troubleshooting-sigma-connectivity
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Troubleshooting Sigma connectivity | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Troubleshooting Sigma connectivity
==================================

#### Why is the SQL query only visible for Sigma data elements and not Sigma datasets?[â](#why-is-the-sql-query-only-visible-for-sigma-data-elements-and-not-sigma-datasets "Direct link to Why is the SQL query only visible for Sigma data elements and not Sigma datasets?")

Atlan gets the SQL query only for Sigma data elements. SQL queries for Sigma datasets are currently unavailable from the Sigma APIs.

#### Why am I not seeing columns for Sigma datasets?[â](#why-am-i-not-seeing-columns-for-sigma-datasets "Direct link to Why am I not seeing columns for Sigma datasets?")

Atlan currently does not support column metadata for Sigma datasets due to limitations of the Sigma APIs.

#### Why am I not seeing Sigma datasets in lineage?[â](#why-am-i-not-seeing-sigma-datasets-in-lineage "Direct link to Why am I not seeing Sigma datasets in lineage?")

Atlan currently does not support showing lineage for Sigma datasets due to limitations of the Sigma APIs.

#### Why is lineage missing between Sigma data elements?[â](#why-is-lineage-missing-between-sigma-data-elements "Direct link to Why is lineage missing between Sigma data elements?")

Atlan currently does not support field\-level lineage between Sigma data elements due to limitations of the Sigma Workbook APIs. However, to maintain field\-level lineage, all Sigma data elements will have direct upstream lineage to SQL assets and field\-level lineage to its column assets.

#### Can users who do not have access to a workbook still see the preview?[â](#can-users-who-do-not-have-access-to-a-workbook-still-see-the-preview "Direct link to Can users who do not have access to a workbook still see the preview?")

Users can only see asset previews if the following conditions are met:

* They have the necessary permissions in both Sigma and Atlan.
* They are logged into Atlan and Sigma on the same browser.

Therefore, if a user lacks the permission to view a workbook in Sigma, they will not be able to see the workbook preview in Atlan. Even if they do have the necessary permissions, they will need to be logged into Sigma on the same browser as their Atlan instance for asset previews to work.

#### Why can I not see previews for my Sigma assets?[â](#why-can-i-not-see-previews-for-my-sigma-assets "Direct link to Why can I not see previews for my Sigma assets?")

Your Sigma assets will be updated with previews during the next run of your Sigma workflow. If you have run the workflow and still do not see the previews, we suggest you rerun the workflow. Once you've rerun the workflow, the previews should be visible to all eligible users.

**Tags:*** [lineage](/tags/lineage)
* [data\-lineage](/tags/data-lineage)
* [impact\-analysis](/tags/impact-analysis)
* [api](/tags/api)
* [rest\-api](/tags/rest-api)
* [graphql](/tags/graphql)

[PreviousPreflight checks for Sigma](/apps/connectors/business-intelligence/sigma/references/preflight-checks-for-sigma)

Copyright Â© 2025 Atlan Pte. Ltd.

