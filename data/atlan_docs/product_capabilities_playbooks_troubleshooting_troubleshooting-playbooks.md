# Source URL
https://docs.atlan.com/product/capabilities/playbooks/troubleshooting/troubleshooting-playbooks

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/playbooks/troubleshooting/troubleshooting-playbooks
link-alternate: https://docs.atlan.com/product/capabilities/playbooks/troubleshooting/troubleshooting-playbooks
meta-description: Learn about troubleshooting playbooks.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about troubleshooting playbooks.
meta-og-locale: en
meta-og-title: Troubleshooting playbooks | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/playbooks/troubleshooting/troubleshooting-playbooks
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Troubleshooting playbooks | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Troubleshooting playbooks
=========================

warning**ð¤ Who can do this?** You will need to be an admin user in Atlan to create playbooks.

Here are a few things to know about [setting up playbooks](/product/capabilities/playbooks/how-tos/set-up-playbooks):

#### What are the known limitations of the domain action?[â](#what-are-the-known-limitations-of-the-domain-action "Direct link to What are the known limitations of the domain action?")

Following are the known issues or limitations when using the [domain action](/product/capabilities/playbooks/how-tos/set-up-playbooks):

* Atlan currently does not support adding glossaries, categories, and terms to domains.
* If you do not have read permission on the assets you want to add to a domain, those assets will be removed from the playbook workflow during processing.Â
* If you do not have update permission on the assets you want to add to a domain, the playbook workflow will fail. However, some assets may still be linked to the domain before the failure occurs.

#### What type of infrastructure costs can I expect to incur?[â](#what-type-of-infrastructure-costs-can-i-expect-to-incur "Direct link to What type of infrastructure costs can I expect to incur?")

Atlan uses Elasticsearch to run playbooks, so expect infrastructure costs to be minimal and not a determining factor for utilizing playbooks.

#### What is the maximum number of playbooks that can be run?[â](#what-is-the-maximum-number-of-playbooks-that-can-be-run "Direct link to What is the maximum number of playbooks that can be run?")

We recommend building no more than a maximum of 20 rules per playbook. However, the total number of playbooks that can be run is still to be determined. From a technical standpoint, playbooks leverage the workflow infrastructure, which means there are no hard limits. Depending on the number of playbooks that need to be run, the infrastructure will have to be scaled accordingly.Â

#### Do I also need to have update permissions for playbooks?[â](#do-i-also-need-to-have-update-permissions-for-playbooks "Direct link to Do I also need to have update permissions for playbooks?")

Yes. You need to have the permission to update assets in Atlan in order to run playbooks for updating them.Â If you do not have the permission to update an asset, you will be unable to update it using playbooks.

Additionally, Atlan uses the permissions of the playbook creator in determining the assets to be updated and not that of the user who runs the playbook. Your user permissions are used to determine the bulk updates you can make to ensure that there is no adverse impact on assets beyond your scope of access.

#### Can I automate requests for updates through playbooks?[â](#can-i-automate-requests-for-updates-through-playbooks "Direct link to Can I automate requests for updates through playbooks?")

No, Atlan currently does not support automating asset update [requests](/product/capabilities/requests/concepts/what-are-requests) through playbooks.

#### Is there a way to undo updates made through playbooks?[â](#is-there-a-way-to-undo-updates-made-through-playbooks "Direct link to Is there a way to undo updates made through playbooks?")

Currently, there is no button to undo asset updates. However, you can [modify your existing playbooks](/product/capabilities/playbooks/how-tos/manage-playbooks). You can either turn off the filters or add new rules to reverse the updates.

#### Is there a way to view or download a report of updated assets from previous playbook runs?[â](#is-there-a-way-to-view-or-download-a-report-of-updated-assets-from-previous-playbook-runs "Direct link to Is there a way to view or download a report of updated assets from previous playbook runs?")

Currently, no. You can [monitor your existing playbooks](/product/capabilities/playbooks/how-tos/manage-playbooks) to view a high\-level summary of asset updates from previous playbook runs. Observability of results is on the roadmap.

#### Can I get email notifications for playbook run successes or failures?[â](#can-i-get-email-notifications-for-playbook-run-successes-or-failures "Direct link to Can I get email notifications for playbook run successes or failures?")

Currently, no. However, you can [set up Slack or Microsoft Teams alerts](/product/capabilities/playbooks/how-tos/manage-playbooks) for your playbook runs in Atlan.

#### How to handle an *offload node status is not supported* error?[â](#how-to-handle-an-offload-node-status-is-not-supported-error "Direct link to how-to-handle-an-offload-node-status-is-not-supported-error")

If you encounter an `offload node status is not supported` error message, the playbook workflow may have exceededÂ the EtcD size limit. Playbooks use Argo workflow templates, which are stored as Kubernetes resources. This creates a limit to their size.

To handle this error, Atlan recommends the following:

* Reduce the number of rules in your playbook
* Optimize filters for asset selection
**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousAutomate data profiling](/product/capabilities/playbooks/how-tos/automate-data-profiling)

Copyright Â© 2025 Atlan Pte. Ltd.

