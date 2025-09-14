# Source URL
https://docs.atlan.com/product/integrations/project-management/jira/troubleshooting/troubleshooting-jira

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/project-management/jira/troubleshooting/troubleshooting-jira
link-alternate: https://docs.atlan.com/product/integrations/project-management/jira/troubleshooting/troubleshooting-jira
meta-description: What fields are supported when creating tickets or requesting access?
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: What fields are supported when creating tickets or requesting access?
meta-og-locale: en
meta-og-title: Troubleshooting Jira | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/project-management/jira/troubleshooting/troubleshooting-jira
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Troubleshooting Jira | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Troubleshooting Jira
====================

#### What fields are supported when creating tickets or requesting access?[â](#what-fields-are-supported-when-creating-tickets-or-requesting-access "Direct link to What fields are supported when creating tickets or requesting access?")

Atlan currently only supports standard fields such as project, issue type, title, and description.

#### Can I configure additional fields or auto\-assign owners to Jira tickets created from Atlan?[â](#can-i-configure-additional-fields-or-auto-assign-owners-to-jira-tickets-created-from-atlan "Direct link to Can I configure additional fields or auto-assign owners to Jira tickets created from Atlan?")

Atlan's [Jira Cloud](/product/integrations/project-management/jira/how-tos/integrate-jira-cloud) and [Jira Data Center](/product/integrations/project-management/jira/how-tos/integrate-jira-data-center) integrations currently do not support assigning owners by default or configuring additional fields while [creating an issue](/product/integrations/project-management/jira/faq/jira-integration#create-new-jira-issues-on-assets). However, you can assign an owner or add any basic or required fields within Jira once the ticket has been created from Atlan.

#### Can site renaming affect the Jira integration?[â](#can-site-renaming-affect-the-jira-integration "Direct link to Can site renaming affect the Jira integration?")

Atlan currently stores and uses the organization URL to help you access your Jira workspace from Atlan, if required. Since Jira [automatically redirects](https://support.atlassian.com/organization-administration/docs/update-a-product-url/) the old URL to the new one, site renaming will not impact the [Jira integration](/product/integrations/project-management/jira/how-tos/integrate-jira-cloud).

#### Does Atlan support multiple Jira accounts and boards?[â](#does-atlan-support-multiple-jira-accounts-and-boards "Direct link to Does Atlan support multiple Jira accounts and boards?")

While Atlan's Jira integration supports multiple Jira projects, it currently does not support multiple Jira accounts.

#### How long are Jira tickets valid in Atlan?[â](#how-long-are-jira-tickets-valid-in-atlan "Direct link to How long are Jira tickets valid in Atlan?")

Jira issues will remain in Atlan unless they are unlinked. To unlink a Jira issue, you can either:

* Manually unlink the Jira issue from the asset in Atlan.
* Delete the issue in Jira.

#### Does Atlan support Jira Service Management?[â](#does-atlan-support-jira-service-management "Direct link to Does Atlan support Jira Service Management?")

No, Atlan currently does not support Jira Service Management. You can use Atlan's [Jira Cloud](/product/integrations/project-management/jira/how-tos/integrate-jira-cloud) and [Jira Data Center](/product/integrations/project-management/jira/how-tos/integrate-jira-data-center) integrations.

**Tags:*** [data](/tags/data)
* [integration](/tags/integration)

[PreviousLink your Jira account](/product/integrations/project-management/jira/how-tos/link-your-jira-account)[NextWhat is included in the Jira integration?](/product/integrations/project-management/jira/faq/jira-integration)

Copyright Â© 2025 Atlan Pte. Ltd.

