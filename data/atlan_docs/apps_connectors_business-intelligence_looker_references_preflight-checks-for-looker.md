# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/looker/references/preflight-checks-for-looker

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/looker/references/preflight-checks-for-looker
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/looker/references/preflight-checks-for-looker
meta-description: First, the list of projects in the _Include Projects_ and _Exclude Projects_ fields is determined. Next, the [Query Projects](https://developers.looker.com/api/explorer/3.1/methods/Project#get_all_projects) REST API is used to fetch the actual list of projects for which the user has [view capability](https://cloud.google.com/looker/docs/access-control-and-permission-management).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: First, the list of projects in the _Include Projects_ and _Exclude Projects_ fields is determined. Next, the [Query Projects](https://developers.looker.com/api/explorer/3.1/methods/Project#get_all_projects) REST API is used to fetch the actual list of projects for which the user has [view capability](https://cloud.google.com/looker/docs/access-control-and-permission-management).
meta-og-locale: en
meta-og-title: Preflight checks for Looker | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/looker/references/preflight-checks-for-looker
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Looker | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Looker
===========================

Before [running the Looker crawler](/apps/connectors/business-intelligence/looker/how-tos/crawl-looker), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

Projects view capability[â](#projects-view-capability "Direct link to Projects view capability")
--------------------------------------------------------------------------------------------------

First, the list of projects in the *Include Projects* and *Exclude Projects* fields is determined. Next, the [Query Projects](https://developers.looker.com/api/explorer/3.1/methods/Project#get_all_projects) REST API is used to fetch the actual list of projects for which the user has [view capability](https://cloud.google.com/looker/docs/access-control-and-permission-management).

â `Check successful` if all the projects from the first list are in the second one.

â `Check failed for $missingProject`

Folders view capability[â](#folders-view-capability "Direct link to Folders view capability")
-----------------------------------------------------------------------------------------------

First, the list of folders in the *Include Folders* and *Exclude Folders* fields is determined. Next,Â the [Query Projects](https://developers.looker.com/api/explorer/3.1/methods/Folder#get_all_folders) REST API is used to fetch the actual list of folders for which the user has [view capability](https://cloud.google.com/looker/docs/access-control-and-permission-management).

â `Check successful` if all the folders from the first list are in the second one.

â `Check failed for $missingFolder`

Git SSH key check[â](#git-ssh-key-check "Direct link to Git SSH key check")
-----------------------------------------------------------------------------

â `Check successful` if a valid SSH key is provided when field level lineage is enabled.

â `Field level lineage needs to clone your git repositories. Please provide your git ssh key or disable field level lineage` or `Please provide your private ssh key properly. Remember to include '-----BEGIN' and '-----END' blocks also. Please remember to specify the password for private key if encrypted`

S3[â](#s3 "Direct link to S3")
--------------------------------

â `Check successful` if the bucket, region, and prefix combination is valid and the S3 credential passed is accessible.

â`Check failed with error code <AWS error code> - <AWS SDK ERR message>`

For example: `Miner S3 credentials: failed with error code: NoSuchBucket`

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)
* [api](/tags/api)

[PreviousWhat does Atlan crawl from Looker?](/apps/connectors/business-intelligence/looker/references/what-does-atlan-crawl-from-looker)[NextTroubleshooting Looker connectivity](/apps/connectors/business-intelligence/looker/troubleshooting/troubleshooting-looker-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

