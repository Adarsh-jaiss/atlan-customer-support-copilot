# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/domo/how-tos/set-up-domo

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/domo/how-tos/set-up-domo
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/domo/how-tos/set-up-domo
meta-description: :::warning Who can do this? You will need your Domo administrator to complete these steps - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will need your Domo administrator to complete these steps - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up Domo | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/domo/how-tos/set-up-domo
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Domo | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Domo
===========

Who can do this?You will need your Domo administrator to complete these steps \- you may not have access yourself.

Atlan supports the basic authentication method for fetching metadata from Domo. This method uses the following to fetch metadata:

* [Client ID](/apps/connectors/business-intelligence/domo/how-tos/set-up-domo)
* [Client secret](/apps/connectors/business-intelligence/domo/how-tos/set-up-domo)
* [Access token](/apps/connectors/business-intelligence/domo/how-tos/set-up-domo)
* [DomoStats dataset IDs](/apps/connectors/business-intelligence/domo/how-tos/set-up-domo)

Create client ID and secret[â](#create-client-id-and-secret "Direct link to Create client ID and secret")
-----------------------------------------------------------------------------------------------------------

dangerYou will need your Domo *Admin* to create a client ID and secret for crawling [Domo datasets and dataset columns](/apps/connectors/business-intelligence/domo/references/what-does-atlan-crawl-from-domo). If the user creating the client credentials does not have admin privileges, only datasets will be crawled.

You will need your Domo instance name to create a client ID and secret. This will be the name preceding your domo.com URL. For example, in the case of `company.domo.com`, the instance name will be `company`.

To create a client ID and secret:

1. Log in to the [Domo Developer Portal](https://developer.domo.com/login) with your Domo instance name \- for example, `company`.
2. Once you have entered your instance name, enter your Domo user credentials when prompted.
3. On the *Create new client* page, enter the following details:
    1. For *Name*, enter a meaningful name for the client application \- for example, `Atlan_connection`.
    2. (Optional) For *Description*, enter a brief description for the client application.
    3. For *Application Scope*, check the following boxes to assign the minimum permissions required to [crawl Domo](/apps/connectors/business-intelligence/domo/how-tos/crawl-domo):
        * **Data** \- this scope allows Atlan to access the [DataSet API](https://developer.domo.com/portal/72ae9b3e80374-list-data-sets).
        * **Dashboard** \- this scope allows Atlan to access the [Page API](https://developer.domo.com/portal/e7bc2fce783cd-list-pages).
    4. Click **Create** to complete the client application.
4. After you have registered the client application, you will be redirected to the *Manage Clients* page to view your newly provisioned client ID and secret. Copy the values for *Client ID* and *Secret* and store them in a secure location.
5. (Optional) To access your client ID and secret at a later time, navigate to the Domo Developer Portal homepage, and then from the left menu, click **Manage clients** to view and manage your existing client credentials.

Generate access token[â](#generate-access-token "Direct link to Generate access token")
-----------------------------------------------------------------------------------------

You will need to create an [access token](https://domo-support.domo.com/s/article/360042934494?language=en_US) that will allow Atlan to generate [upstream lineage for Domo datasets](/apps/connectors/business-intelligence/domo/references/what-does-atlan-crawl-from-domo).

Only a Domo *Admin* default security role or a custom role with either the *Manage All Company Settings* or *Manage All Access Tokens* grant enabled can generate access tokens. If you do not have either of these privileges, request an access token from your Domo administrator.

To generate an access token:

1. Log in to your Domo instance as a Domo administrator.
2. From the tabs along the top of your Domo homepage, click **More** and then click **Admin**.
3. On the *Admin* settings page, under *Authentication*, click **Access tokens**.
4. In the upper right of the *Manage access tokens* page, click the **Generate access token** button.
5. To specify the token information:
    1. For *Access token description*, enter a meaningful name for your token \- for example, `Atlan_connection_token`.
    2. For *Search users*, search for and select the user to assign the token.
    
        danger Access tokens are associated with specific user accounts and grant the same access as the user who generated the token. If the user's permissions change, the access token will reflect the same.
    3. For *Expire after*, select an expiration date for the token.
    4. Click **Generate** to generate the access token.
6. From the corresponding screen, copy the access token and store it in a secure location. The token will not be displayed again after you leave the *Manage access tokens* page.
7. (Optional) To revoke the access token, follow the steps in [Domo documentation](https://domo-support.domo.com/s/article/360042934494?language=en_US).

Set up DomoStats connector[â](#set-up-domostats-connector "Direct link to Set up DomoStats connector")
--------------------------------------------------------------------------------------------------------

The [DomoStats connector](https://www.domo.com/appstore/connector/domostats/overview) allows you to import usage metadata from your Domo instance. This connector is only available to Domo administrators.

Due to limitations of the Domo APIs, you will need to set up the DomoStats connector to crawl metadata for Domo cards and catalog asset relationships between cards and dashboards as well as datasets and cards in Atlan. The DomoStats connector allows you to build datasets with the required metadata. Once you have created the datasets, Atlan will require the dataset IDs to fetch the metadata from DomoStats. All three DomoStats dataset IDs are required to [crawl Domo](/apps/connectors/business-intelligence/domo/how-tos/crawl-domo).

To set up DomoStats:

1. Log in to your Domo instance as a Domo administrator.
2. From the tabs along the top of your Domo homepage, click **Appstore**.
3. In the search bar, search for and select **DomoStats**.
4. From the right panel of the *DomoStats* page, click the **Get the Data** button.
5. In the *Create DomoStats DataSet* page, you will need to create three DomoStats datasets for card, card\-dashboard relationship, and dataset\-card relationship metadata. Except step 1 below, the remaining steps will be the same for all three datasets.
    1. Â Under *Details*, for *Report*, click the dropdown and then:
        * Click **Cards** to create a dataset for card metadata.
        * Click **Card Pages** to create a dataset for card\-dashboard relationship metadata.
        * Click **Card Datasource** to create a dataset for dataset\-card relationship metadata.
    2. Click **Next** to proceed.
    3. Under *Scheduling*, you can either keep the predefined update schedule or define a custom schedule, and then click **Next**.
    4. Under *Name \& Describe Your DataSet*, enter the following details:
        1. For *Dataset Name (Required)*, enter a meaningful name for your dataset.
        2. For *Dataset Description (Optional)*, enter a brief description for your dataset.
        3. For *Add Dataset to Cloud*, keep the default Domo selection.
    5. Click **Save** to finish setup.
6. Once you have completed setting up a dataset, from the corresponding page, copy the dataset ID from the URL for all three datasets and store them in a secure location. For example, if the dataset URL is `company.domo.com/datasource/ae6440eb-bef6-414a-a0e5-a5b2d58d1234/details/overview`, then the dataset ID will be: `ae6440eb-bef6-414a-a0e5-a5b2d58d1234`.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousDomo](/apps/connectors/business-intelligence/domo)[NextCrawl Domo](/apps/connectors/business-intelligence/domo/how-tos/crawl-domo)

Copyright Â© 2025 Atlan Pte. Ltd.

