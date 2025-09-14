# Source URL
https://docs.atlan.com/product/integrations/project-management/servicenow/troubleshooting/troubleshooting-servicenow

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/project-management/servicenow/troubleshooting/troubleshooting-servicenow
link-alternate: https://docs.atlan.com/product/integrations/project-management/servicenow/troubleshooting/troubleshooting-servicenow
meta-description: Why is the security\_admin role required to complete the ServiceNow integration?
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Why is the security\_admin role required to complete the ServiceNow integration?
meta-og-locale: en
meta-og-title: Troubleshooting ServiceNow | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/project-management/servicenow/troubleshooting/troubleshooting-servicenow
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Troubleshooting ServiceNow | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Troubleshooting ServiceNow
==========================

#### Why is the security\_admin role required to complete the ServiceNow integration?[â](#why-is-the-security_admin-role-required-to-complete-the-servicenow-integration "Direct link to Why is the security_admin role required to complete the ServiceNow integration?")

Atlan strongly recommends that a System Administrator with a [security\_admin role](https://www.servicenow.com/docs/bundle/vancouver-platform-security/page/administer/security/concept/c_ElevatedPrivilege.html#d164680e98) completes the integration from start to finish. However, it is not necessary and may depend on the rules or policies configured on your ServiceNow instance.

For example, while a default System AdministratorÂ can [create an OAuth application](/product/integrations/project-management/servicenow/how-tos/integrate-servicenow), they may not be permitted to modify access control lists (ACLs)Â onÂ ServiceNow. The security\_admin role has elevated privileges precisely for creating or modifying ACLs.Â This is required to [configure the Atlan integration in ServiceNow](/product/integrations/project-management/servicenow/how-tos/integrate-servicenow#configure-the-atlan-integration-in-servicenow).

#### What is the Atlan auto\-approve workflow attached to the Atlan Data Access catalog in ServiceNow? Can it be removed?[â](#what-is-the-atlan-auto-approve-workflow-attached-to-the-atlan-data-access-catalog-in-servicenow-can-it-be-removed "Direct link to What is the Atlan auto-approve workflow attached to the Atlan Data Access catalog in ServiceNow? Can it be removed?")

The Atlan auto\-approve workflow is a basic workflow that auto\-approves the Requested Item (RITM) for requests created in the Atlan Data Access catalog. This does not mean that requests have been auto\-completed. Atlan will wait for the final request state to be updated to the state selected in the governance workflow before completing the request. For example, if you have selected *Closed Complete*, the request state in ServiceNow must reflect that state before Atlan can mark the request as completed.

Yes, you can remove the Atlan auto\-approve workflow from your ServiceNow instance. You can configure the Process Engine setup for any requests in the Atlan Data Access catalog to adhere to existing processes in your organization.

#### Why are our custom request states from ServiceNow not showing up in Atlan?[â](#why-are-our-custom-request-states-from-servicenow-not-showing-up-in-atlan "Direct link to Why are our custom request states from ServiceNow not showing up in Atlan?")

If your custom request states from ServiceNow are not showing up in Atlan, please [contact Atlan support](/support/submit-request).

#### The commit update set action is failing. How can I resolve it?[â](#the-commit-update-set-action-is-failing-how-can-i-resolve-it "Direct link to The commit update set action is failing. How can I resolve it?")

If the commit update set action is failing, please [contact Atlan support](/support/submit-request) as this may be due to conflicts. The Atlan team may need to generate a different update set or work with your ServiceNow System Administrator to set up the process manually.

#### Can we modify the Atlan Data Access catalog?[â](#can-we-modify-the-atlan-data-access-catalog "Direct link to Can we modify the Atlan Data Access catalog?")

Atlan strongly recommends that you refrain from modifying the Atlan Data Access catalog in ServiceNow. Removing any existing variables used by Atlan can cause errors in the request creation process. However, you can add any non\-mandatory variables to the catalog. Bear in mind that Atlan will not populate such variables.

**Tags:*** [integration](/tags/integration)
* [connectors](/tags/connectors)
* [security](/tags/security)
* [access\-control](/tags/access-control)
* [permissions](/tags/permissions)

[PreviousLink your ServiceNow account](/product/integrations/project-management/servicenow/how-tos/link-your-servicenow-account)

Copyright Â© 2025 Atlan Pte. Ltd.

