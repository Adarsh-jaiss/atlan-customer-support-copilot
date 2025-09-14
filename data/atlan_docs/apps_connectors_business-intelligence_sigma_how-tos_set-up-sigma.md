# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/sigma/how-tos/set-up-sigma

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/how-tos/set-up-sigma
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/how-tos/set-up-sigma
meta-description: :::warning Who can do this? You will probably need your Sigma administrator to complete these steps - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will probably need your Sigma administrator to complete these steps - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up Sigma | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/how-tos/set-up-sigma
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Sigma | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Sigma
============

Who can do this?You will probably need your Sigma administrator to complete these steps \- you may not have access yourself.

Identify your organization's cloud[â](#identify-your-organizations-cloud "Direct link to Identify your organization's cloud")
-------------------------------------------------------------------------------------------------------------------------------

You will need your organization's cloud information to determine the endpoint while authenticating in Atlan.

To identify your organization's cloud:

1. Open your Sigma account.
2. In the top right of the screen, click your **profile avatar** and then click **Administration** to open your *Account* page.
3. On the *Account* page, under *Site* in *General Settings*, view the cloud information.

Create an API token and client ID[â](#create-an-api-token-and-client-id "Direct link to Create an API token and client ID")
-----------------------------------------------------------------------------------------------------------------------------

To create an API token and client ID:

1. Open your Sigma account.
2. In the top right of the screen, click your profile avatar and then click **Administration**.
3. From the left menu of the *Administration* page, click **Developer Access**.
4. In the top right of the *Developer Access* page, click the **Create New** button.
5. In the *Create client credentials* dialog, for *Select privileges*, click the **Rest API** checkbox, and then enter the following details:

    1. For *Name*, enter a meaningful name.
        2. For *Owner*, select the user you would like to associate with the token.
        3. Click **Create** to finish creating the API token.
6. Once prompted, click **Copy** to copy and paste your API key secret in a secure location.

    danger The secret cannot be retrieved once this popover is closed.
7. Your newly created API token will be listed in the *Developer Access*Â page. Hover over the tokenâs *Client ID* and click **Copy**.

Both the API token and the client ID are required for authentication in Atlan.

Verify necessary permissions[â](#verify-necessary-permissions "Direct link to Verify necessary permissions")
--------------------------------------------------------------------------------------------------------------

Ensure that the owner associated with the API token has the following permissions:

* `Can View` permission for all the Sigma workbooks and datasets you want to crawl.
* `Can Use` permission for all the Sigma connections used in the workbooks and datasets.

Grant permissions[â](#grant-permissions "Direct link to Grant permissions")
-----------------------------------------------------------------------------

To grant permissions, follow the instructions in these links:

* [Workbooks and datasets](https://help.sigmacomputing.com/hc/en-us/articles/4402444938003)
* [Connections](https://help.sigmacomputing.com/hc/en-us/articles/360037430393)
**Tags:*** [api](/tags/api)
* [rest\-api](/tags/rest-api)
* [graphql](/tags/graphql)

[PreviousSigma](/apps/connectors/business-intelligence/sigma)[NextCrawl Sigma](/apps/connectors/business-intelligence/sigma/how-tos/crawl-sigma)

Copyright Â© 2025 Atlan Pte. Ltd.

