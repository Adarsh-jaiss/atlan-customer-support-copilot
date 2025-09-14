# Source URL
https://docs.atlan.com/apps/connectors/crm/salesforce/troubleshooting/troubleshooting-salesforce-connectivity

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/crm/salesforce/troubleshooting/troubleshooting-salesforce-connectivity
link-alternate: https://docs.atlan.com/apps/connectors/crm/salesforce/troubleshooting/troubleshooting-salesforce-connectivity
meta-description: Learn about troubleshooting salesforce connectivity.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about troubleshooting salesforce connectivity.
meta-og-locale: en
meta-og-title: Troubleshooting Salesforce connectivity | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/crm/salesforce/troubleshooting/troubleshooting-salesforce-connectivity
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Troubleshooting Salesforce connectivity | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Troubleshooting Salesforce connectivity
=======================================

#### Why does Atlan require an admin user in Salesforce?[â](#why-does-atlan-require-an-admin-user-in-salesforce "Direct link to Why does Atlan require an admin user in Salesforce?")

Atlan recommends a Salesforce administrator for setting up a [connection between Atlan and Salesforce](/apps/connectors/crm/salesforce/how-tos/set-up-salesforce).

Once connected, Atlan can extract all Salesforce objects \- including corresponding fields, folders and child folders, along with dashboards and reports \- without having to enable object\-level permissions and field\-level security (FLS) for each object addition in the profile or permission sets.

Although it's possible to enable these permissions for non\-admin users, only admins have the special permissions to oversee all newly added custom objects. This is regardless of which non\-admin users created those custom objects or the permissions that were imposed on them.

#### Why is Atlan unable to crawl some system\-generated objects in Salesforce?[â](#why-is-atlan-unable-to-crawl-some-system-generated-objects-in-salesforce "Direct link to Why is Atlan unable to crawl some system-generated objects in Salesforce?")

Atlan operates in read\-only mode and doesn't make any API calls that modify your Salesforce instance. With the limited permissions typically granted during setup, Atlan may not be able to crawl certain system\-generated objects, such as:

* `ContentDocumentSubscription`
* `ContentNotification`
* `ContentTagSubscription`
* `ContentUserSubscription`
* `ContentVersionComment`
* `ContentVersionRating`
* `ContentWorkspaceSubscription`
* `CorsWhitelistEntry`
* `EmailCapture`
* `FeedPollChoice`
* `FeedPollVote`
* `OrgDeleteRequest`
* `PlatformStatusAlertEvent`
* `PromptError`
* `PromptAction`
* `SetupAssistantStep`
* `TopicUserEvent`

#### Does Atlan collect formula fields from Salesforce?[â](#does-atlan-collect-formula-fields-from-salesforce "Direct link to Does Atlan collect formula fields from Salesforce?")

Yes, Atlan collects formula fields from Salesforce. However, if the formula fields are brought into your data warehouse via Fivetran,Â they aren't reflected in Atlan as assets from your data warehouse. This is because Fivetran [does not sync formula fields](https://fivetran.com/docs/applications/salesforce/formula) from Salesforce.

#### Why do I get an "sObject type 'Organization' isn't supported" error message?[â](#why-do-i-get-an-sobject-type-organization-isnt-supported-error-message "Direct link to Why do I get an \"sObject type 'Organization' isn't supported\" error message?")

To pass the preflight check for [organization count](/apps/connectors/crm/salesforce/references/preflight-checks-for-salesforce#organization-count-check), make sure that you've added the *Modify All Data*Â permission while [setting up Salesforce](/apps/connectors/crm/salesforce/how-tos/oauth-jwt-bearer-setup#create-custom-profile). This [object permission](https://help.salesforce.com/s/articleView?id=sf.users_profiles_object_perms.htm) enables the user to access all shared and public folders, regardless of sharing settings.

**Tags:*** [dashboards](/tags/dashboards)
* [visualization](/tags/visualization)
* [analytics](/tags/analytics)
* [security](/tags/security)
* [access\-control](/tags/access-control)
* [permissions](/tags/permissions)

[PreviousPreflight checks for Salesforce](/apps/connectors/crm/salesforce/references/preflight-checks-for-salesforce)[NextDoes Atlan require an admin user in Salesforce?](/apps/connectors/crm/salesforce/faq/admin-user-salesforce)

Copyright Â© 2025 Atlan Pte. Ltd.

