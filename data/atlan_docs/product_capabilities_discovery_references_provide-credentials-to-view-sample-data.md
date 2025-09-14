# Source URL
https://docs.atlan.com/product/capabilities/discovery/references/provide-credentials-to-view-sample-data

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/discovery/references/provide-credentials-to-view-sample-data
link-alternate: https://docs.atlan.com/product/capabilities/discovery/references/provide-credentials-to-view-sample-data
meta-description: Learn about provide credentials to view sample data.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about provide credentials to view sample data.
meta-og-locale: en
meta-og-title: Provide credentials to view sample data | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/discovery/references/provide-credentials-to-view-sample-data
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Provide credentials to view sample data | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Provide credentials to view sample data
=======================================

Once your connection admins have [configured *bring your own credentials* (BYOC)](/product/capabilities/insights/how-tos/query-without-shared-credentials) in Atlan, users will need to provide their own credentials before they can view the sample data in the asset profile. This will help you enforce better governance across your organization.

Who can do this?Any [Atlan user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles) with [data access to the asset](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data#data-policies) and their own credentials for the data store. Atlan will display a [100\-row sample of the data](/platform/concepts/data-and-metadata-persistence#data-previews-and-queries).

[https://demo.arcade.software/o5KS6vc0055HKiRFhztG?embed](https://demo.arcade.software/o5KS6vc0055HKiRFhztG?embed)

Use your own credentials to view sample data[â](#use-your-own-credentials-to-view-sample-data "Direct link to Use your own credentials to view sample data")
--------------------------------------------------------------------------------------------------------------------------------------------------------------

Atlan supports both basic username and password as well as key pair authentication of your credentials. Atlan also supports [SSO authentication](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-view-sample-data).

To set up your own credentials for viewing sample data:

1. On the *Assets* page, click on an asset to view its asset profile.
2. In the asset profile, click **Sample Data**.
3. To set up your credentials for viewing the sample data, click **Get Started**.
4. In the popup window, click **Get Started** once again to proceed.
5. In the *User credential setup* dialog box, *Basic* is selected as the default authentication option. Enter the following:
    1. For *Username*, enter the username for the connection.
    2. For *Password*, enter the password for that connection.
    3. For *Role*, enter your role for that connection.
    4. For *Warehouse*, enter the name of the warehouse.
6. Click the **Test Authentication** button to confirm your credentials.
7. Once authentication is successful, click **Done**.

You can now view sample data using your own credentials! ð

When using the key pair method, you'll need to enter your encrypted private key and the private key password to complete the authentication process.

**Did you know?**Once you've set up your credentials for viewing sample data, you can also [manage your credentials](/product/capabilities/insights/how-tos/provide-credentials-to-query-data#manage-your-credentials). If your admin has enabled [sample data download](/product/administration/labs/how-tos/enable-sample-data-download), you can export sample data in a CSV file.

**Tags:*** [integration](/tags/integration)
* [connectors](/tags/connectors)

[PreviousWhat are asset profiles?](/product/capabilities/discovery/concepts/what-are-asset-profiles)[NextDiscovery FAQs](/product/capabilities/discovery/faq)

Copyright Â© 2025 Atlan Pte. Ltd.

